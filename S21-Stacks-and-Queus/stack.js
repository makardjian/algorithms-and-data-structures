class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  
  // O(1)
  push(value) {
    let node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.size += 1;
    return this.size;
    // this.last.next will always be null b/c there would be nothing else to pop off.
  }

  // O(1)
  pop() {
    if (!this.size) return null;
    let nodeToRemove = this.first;
    this.first = this.first.next;
    this.size -= 1;
    if (this.size === 0) this.last = null;
    return nodeToRemove.value;
  }
}
