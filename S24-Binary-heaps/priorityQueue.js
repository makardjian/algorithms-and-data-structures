
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
  
  // O(log2(n))
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    // edge case when length is 0;
    if (!this.values.length) {
      this.values.push(newNode);
      return this.values;
    }
    // when length is >= 1;
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

  // O(log2(n))
  dequeue(){
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0){
      this.values[0] = end;
      this.bubbleDown();
    }
    return min;
  }

  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild,rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) || 
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
