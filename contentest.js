//REDIGITAR E ABSOVER

const termsToHighlight = ["0000913", "test", "highlight"];

highlightTerms(termsToHighlight);

function highlightTerms(terms) {
    while (walker.nextNode()) {
        textNodes.push(walker.currentNode);
    }
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false)
    const textNodes = [];
    textNodes.forEach(highlightNode);

    function highlightNode(node) {
        const text = node.nodeValue;
        const parentNode = node.parentNode;
        let matchFound = false;
        
        delimiter = '~~~';
        const fragments = terms.reduce((acc, term) => {
            const regex = new RegExp(`(${escapeRegExp(term)})`, 'gi');
            return acc.replace(regex, '${delimiter}$1${delimiter}');
        }, text).split(delimiter);
    }

   
}