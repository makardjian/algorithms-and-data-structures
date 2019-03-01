
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQue {
  constructor() {
    this.values = [];
  }
  
  enqueue(value, priority) {
    let newNode = new Node(value, priority);

    // edge case when length is 0;
    if (!this.values.length) {
      this.values.push(newNode);
      return this.values;
    }
    // edge case when length is 1;
    if (this.values.length === 1) {
      if (this.values[0].priority < newNode.priority) {
        this.values.push(newNode);
      } else {
        this.values.unshift(newNode);
      }
      return this.values;
    }
    // when length is >= 2;
    this.values.push(newNode);
    return this.bubbleUp();
}

  bubbleUp() {
    let childIndex = this.values.length - 1;
    let parentIndex = Math.floor((childIndex- 1) / 2);
    let temp;
    
    while (this.values[childIndex].priority < this.values[parentIndex].priority){
      temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[childIndex];
      this.values[childIndex] = temp;
      childIndex = parentIndex;
      if (childIndex !== 0) parentIndex = Math.floor((childIndex - 1) / 2)
    }
    return this.values;
  }
}



