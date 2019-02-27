
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const dfsInOrder = (tree) => {
  if (!tree.root) return [];
  let results = [];
  const traverseTree = (node) => {
    if (node.left !== null) traverseTree(node.left);
    results.push(node.value);
    if (node.right !== null) traverseTree(node.right);
  }
  traverseTree(tree.root);
  return results;
}
