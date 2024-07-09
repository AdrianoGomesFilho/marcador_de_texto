const termsToHighlight = ["adriano", "test", "highlight"];

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

  function highlightNode(node, doc) {
    const text = node.nodeValue;
    const parentNode = node.parentNode;
    let matchFound = false;

    const fragments = terms.reduce((acc, term) => {
      const regex = new RegExp(`(${escapeRegExp(term)})`, 'gi');
      return acc.replace(regex, '§$1§');
    }, text).split('§');

    const fragment = doc.createDocumentFragment();
    fragments.forEach((fragmentText) => {
      if (terms.some(term => term.toLowerCase() === fragmentText.toLowerCase())) {
        matchFound = true;
        fragment.appendChild(createHighlightSpan(fragmentText));
      } else {
        fragment.appendChild(doc.createTextNode(fragmentText));
      }
    });

    if (matchFound) {
      parentNode.replaceChild(fragment, node);
    }
  }

  function highlightTermsInDocument(doc) {
    const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT, null, false);
    const textNodes = [];
    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }
    textNodes.forEach((node) => highlightNode(node, doc));
  }

  // Highlight terms in the main document
  highlightTermsInDocument(document);

  // Highlight terms in iframes
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach((iframe) => {
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      highlightTermsInDocument(iframeDoc);

      // Check for nested iframes within the current iframe
      const nestedIframes = iframeDoc.querySelectorAll('iframe');
      nestedIframes.forEach((nestedIframe) => {
        try {
          const nestedIframeDoc = nestedIframe.contentDocument || nestedIframe.contentWindow.document;
          highlightTermsInDocument(nestedIframeDoc);
        } catch (e) {
          console.error('Error accessing nested iframe content', e);
        }
      });

    } catch (e) {
      console.error('Error accessing iframe content', e);
    }
  });
}

// Apply highlighting
highlightTerms(termsToHighlight);

// Add CSS for highlighting
const style = document.createElement('style');
style.innerHTML = `
  .highlight {
    background-color: yellow;
    color: black;
  }
`;
document.head.appendChild(style);
