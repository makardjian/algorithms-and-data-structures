
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor () {
    this.root = null;
  }

  // O(log(n)) but not guaranteed
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    let prev;
    //itterate over tree to find correct spot for insertion
    while (current !== null) {
      if (current.value === newNode.value) return false;
      if (newNode.value > current.value) {
        prev = current;
        current = current.right
      } else {
        prev = current;
        current = current.left;
      }
    }
    // determine if newNode should be placed to the left or right of correct point of insertion
    if (newNode.value > prev.value) {
      prev.right = newNode;
    } else {
      prev.left = newNode;
    }
    return this;
  }

  // O(log(n)) but not guaranteed
  contains(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current !== null) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}
