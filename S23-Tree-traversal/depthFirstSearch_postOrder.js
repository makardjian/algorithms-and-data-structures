
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const dfsPostOrder = (tree) => {
  if (!tree.root) return [];
  let results = [];
  const traverseTree = (node) => {
    if (node.left !== null) traverseTree(node.left);
    if (node.right !== null) traverseTree(node.right);
    results.push(node);
  } 
  traverseTree(tree.root);
  return results;
}
