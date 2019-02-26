
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//  very bad way to represent a linked list b/c it's missing methods.
let first = new Node('hello');
first.next = new Node('there');
first.next.next = new Node ('how');
first.next.next.next = new Node('are');
first.next.next.next.next = new Node('you?');

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // O(1)
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  // O(n)
  pop() {
    if (this.length === 0) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // O(1)
  shift() {
    if (this.length === 0) return undefined;
    let nodeToRemove = this.head;
    this.head = nodeToRemove.next;
    this.length -=1;
    if (this.length === 0) this.tail = null;
    return nodeToRemove;
  }

  // O(1)
  unshift(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    if (this.length === 1) {
      this.tail = newNode;
    }
  }

  // O(n) ==> indices in linked lists are not true indices. They require traversal.
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter += 1;
    }
    return current;
  }

  // O(n)
  set(index, value) {
    if (index < 0 || index >= this.length) return false;
    let target = this.get(index);
    target.val = value;
    return true;
  }

  // O(n) unless index === 0 or index === list.length in which case O(1)
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    let newNode = new Node(value);
    let target = this.get(index - 1);
    newNode.next = target.next;
    target.next = newNode;
    this.length += 1;
    return true;
  }

  // O(n) unless index === 0 in which case O(1)
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop()
    let oneBefore = this.get(index - 1);
    let nodeToRemove = oneBefore.next;
    oneBefore.next = nodeToRemove.next;
    this.length -= 1;
    return nodeToRemove;
  }
  
  // O(n)
  reverse() {
    if (!this.head) return false;
    if (this.head === this.tail) return this;
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    let oldNext = current.next;
    while (current) {
      oldNext = current.next;
      current.next = prev;
      prev = current;
      current = oldNext
    }
    return this;
  }
}
