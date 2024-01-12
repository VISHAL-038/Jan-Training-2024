//dom traversing
//understandin DOM tree , root node , element node,
//and sibling node , text nodes(white-space);
//parentNode - returns the parent of a specified node;
//childNodes - returns all child nodes of a specified node;
//firstChild - returns the first child node of a specified node;
//lastChild - returns the last child node of a specified node;
//nextSibling - returns the next sibling node of a specified node;
//previousSibling - returns the previous sibling node of a specified node.



const rootNode = document.getRootNode();
console.log(rootNode);

const html = rootNode.childNodes;
console.log(html);

// console.log(rootChild[0]);

//htmlchild node length
// console.log("Number of children : ", document.body.children.length)

const htmlChild = html[0].childNodes;
console.log(htmlChild);

const headChild = htmlChild[0].childNodes;
console.log(headChild);

const bodyChild = htmlChild[2].childNodes;
console.log(bodyChild);

console.log("access");
const sibl = bodyChild.nextSibling;
console.log(sibl);

const h1child = bodyChild[1].childNodes;
console.log(h1child);
const h2child = h1child[0].childNodes;
console.log(h2child);

