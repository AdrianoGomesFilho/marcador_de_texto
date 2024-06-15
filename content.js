const termsToHighlight = ["0000913", "test", "highlight"]; // Add your list of terms here

function highlightTerms(terms) {
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters for regex
  }

  function createHighlightSpan(text) {
    const span = document.createElement('span');
    span.className = 'highlight';
    span.textContent = text;
    return span;
  }

  function highlightNode(node) {
    const text = node.nodeValue;
    const parentNode = node.parentNode;
    let matchFound = false;
    
    const fragments = terms.reduce((acc, term) => {
      const regex = new RegExp(`(${escapeRegExp(term)})`, 'gi');
      return acc.replace(regex, '§$1§');
    }, text).split('§');

    const fragment = document.createDocumentFragment();
    fragments.forEach((fragmentText) => {
      if (terms.some(term => term.toLowerCase() === fragmentText.toLowerCase())) {
        matchFound = true;
        fragment.appendChild(createHighlightSpan(fragmentText));
      } else {
        fragment.appendChild(document.createTextNode(fragmentText));
      }
    });

    if (matchFound) {
      parentNode.replaceChild(fragment, node);
    }
  }

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach(highlightNode);
}

highlightTerms(termsToHighlight);

const style = document.createElement('style');
style.innerHTML = `
  .highlight {
    background-color: yellow;
    color: black;
  }
`;
document.head.appendChild(style);
