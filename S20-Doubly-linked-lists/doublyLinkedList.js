
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

  // O(1);
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
  
  // O(1);
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

  // O(1);
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

  // O(1);
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

  // O(n / 2) which simplifies to O(n) or linear time complexity;
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let midPoint = Math.floor(this.length / 2);
    let counter, current;
    if (index < midPoint) {
      counter = 0;
      current = this.head;
      while (counter < index) {
        counter += 1; 
        current = current.next;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter > index) {
        counter -= 1;
        current = current.prev;
      }
    } 
    return current;
  }

  // O(n) because it invokes this.get();
  set(index, newVal) {
    let node = this.get(index);
    if (node === undefined) return false;
    node.val = newVal;
    return true;
  }

  //O(1) once you have access to the correct point of insertion
  //Altogether, O(n) since this.get() is invoked the majority of the time.
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let nodeAfter = this.get(index);
    let nodeBefore = nodeAfter.prev;
    newNode.prev = nodeBefore;
    newNode.next = nodeAfter;
    nodeBefore.next = newNode;
    nodeAfter.prev = newNode;
    this.length += 1;
    return true;
  }

  //O(1) once you have access to the correct point of insertion
  //Altogether, O(n) since this.get() is invoked the majority of the time.
  remove(index) {
    if (!this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let target = this.get(index);
    if (target === undefined) return undefined;
    let nodeBefore = target.prev;
    let nodeAfter = target.next;
    nodeBefore.next = nodeAfter;
    nodeAfter.prev = nodeBefore;
    target.next = null;
    target.prev = null;
    this.length -= 1; 
    return target;
  }

  // O(n)
  reverse() {
    if (!this.length) return undefined;
    if (this.length === 1) return this;
    let counter = 0;
    let current = this.head;
    let tempNode;
    while (counter < this.length) {
      tempNode = current.next;
      current.next = current.prev;
      current.prev = tempNode;
      current = current.prev;
      counter += 1; 
    }
    tempNode = this.head;
    this.head = this.tail;
    this.tail = tempNode;
  }
}
