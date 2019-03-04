
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // O(log2(n))
  insert(value) {
    this.values.push(value);
    if (this.values.length === 1) return this.values;
    return this.bubbleUp();
  }

  bubbleUp () {
    let childIndex = this.values.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    let tempValue;

    while (this.values[childIndex] > this.values[parentIndex]) {
      // store the parent value in temporary variable
      tempValue = this.values[parentIndex];
      // reassign the element at the parent index to equal the child value.
      this.values[parentIndex] = this.values[childIndex];
      // reassign the element at the childIndex to equal the old parent value
      this.values[childIndex] = tempValue;

      childIndex = parentIndex;
      parentIndex = Math.floor((parentIndex - 1) / 2);
    }
    return this.values;
  }

  // O(log2(n))
  extractMax() {
    // avoid using shift() so that the array doesn't need to be re-indexed;
    if (!this.values.length) return null;
    if (this.values.length === 1) return this.values.pop();
    let removed = this.values[0]
    let newRoot = this.values.pop();
    this.values[0] = newRoot;
    if (this.values.length > 1) this.bubbleDown();
    return removed;
  }
  
  bubbleDown() {
    // edge case if there are only two values left in the array
    if (this.values.length === 2) {
      if (this.values[0] < this.values[1]) {
        let temp = this.values[0];
        this.values[0] = this.values[1];
        this.values[1] = temp;
      }
      return;
    }
    // when this.values > 2 run the following code
    let currentIndex = 0;
    let leftChildIndex = 1;
    let rightChildIndex = 2;
    let tempValue, biggerIndex, maxChild;
    while (this.values[currentIndex] < this.values[leftChildIndex] || this.values[currentIndex] < this.values[rightChildIndex]) {
      tempValue = this.values[currentIndex];
      //avoid using indexOf to increase speed performence
      maxChild = Math.max(this.values[leftChildIndex], this.values[rightChildIndex])
      if (maxChild === this.values[leftChildIndex]) {
        biggerIndex = leftChildIndex;
      } else {
        biggerIndex = rightChildIndex;
      }
      this.values[currentIndex] = this.values[biggerIndex];
      this.values[biggerIndex] = tempValue;
      currentIndex = biggerIndex;
      leftChildIndex = (2 * currentIndex) + 1;
      rightChildIndex = (2 * currentIndex) + 2;
    }
  }
}
