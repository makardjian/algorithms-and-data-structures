
class Node {
  constructor(value) {
    value: this.value;
    left: null
    right: null;
  }
}

const breadthFirstSearch = (tree) => {
  let queue = [];
  let results = [];
  if (!tree.root) return results;
  queue.push(tree.root);
  let currentNode;
  while (queue.length !== 0) {
    currentNode  = queue.shift();
    results.push(currentNode.value);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
  return results;
}
