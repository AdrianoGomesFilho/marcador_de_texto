//REDIGITAR E ABSOVER

const termsToHighlight = ["0000913", "test", "highlight"];

highlightTerms(termsToHighlight);

function highlightTerms(terms) {
    while (walker.nextNode()) { //enquanto houver proximo node, adicione o node atual no walker
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
            const regex = new RegExp(`(${escapeRegExp(term)})`, 'gi'); //o gi vai dar match de forma global (g), nao somente na primeira ocorrencia, o i é case-INSENsitive
            return acc.replace(regex, '${delimiter}$1${delimiter}');
        }, text).split(delimiter);

        function escapeRegExp(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // serve para adicionar barras antes de alguns caracteres especiais, isso evita que o JS interprete errado
        }

        const fragment = document.createDocumentFragment(); //permite criar um conteiner fora da arvore DOM, que pode ser usada sem forçar uma nova renderização da página

        fragments.forEach((fragmentText) => {
            if (terms.some(term))
        }
    )

    }

   
}