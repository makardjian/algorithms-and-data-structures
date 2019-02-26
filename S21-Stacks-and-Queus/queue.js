
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor () {
    this.first = null;
    this.last = null;
    this.size = null;
  }

  // O(1)
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size += 1;
    return this.size;
  }

  //O(1)
  dequeue() {
    if (!this.size) return null;
    let nodeToRemove = this.first;
    this.first = this.first.next;
    this.size -= 1;
    if (this.size === 0) this.last = null;
    return nodeToRemove.value;
  }
}
