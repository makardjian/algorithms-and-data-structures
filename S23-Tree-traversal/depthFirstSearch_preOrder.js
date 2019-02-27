
class Node {
  constructor(value) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const dfsPreOrder = (tree) => {
  if (!tree.root) return [];
  let results = [];
  const traverseTree = (node) => {
    results.push(node.value);
    if (node.left !== null) traverseTree(node.left);
    if (node.right !== null) traverseTree(node.right);
  }
  traverseTree(tree.root)
  return results;
}
