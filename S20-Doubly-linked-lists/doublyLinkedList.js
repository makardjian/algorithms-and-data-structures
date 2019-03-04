
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  
  push(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode; 
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  
  pop() {
    if (!this.length) return undefined;
    let removed;
    if (this.length === 1) {
      removed = this.head;
      this.head = null;
      this.prev = null;
    } else {
      removed = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length -= 1;
    // sever the connection to the list before you return popped node.
    removed.prev = null;
    return removed;
  }

  shift() {
    if (!this.length) return undefined;
    let removed;
    if (this.length === 1) {
      removed = this.head;
      this.head = null;
      this.tail = null;
    } else {
      removed = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      removed.next = null; // sever ties to the list
    }
    this.length -= 1;
    return removed;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    
  }





}