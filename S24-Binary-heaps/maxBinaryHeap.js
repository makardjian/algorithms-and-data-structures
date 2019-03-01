
class maxBinaryHeap {
  constructor() {
    this.values = [];
  }

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
  
  extract() {
    if (!this.values.length) return null;
    let removed = this.values.shift();
    if (this.values.length > 1) {
      this.bubbleDown();
    }
    return removed;
  }
  
  bubbleDown() {
    let newRoot = this.values.pop();
    this.values.unshift(newRoot);

    // edge case if there are only two values left in the array
    if (this.values.length === 2) {
      if (this.values[0] < this.values[1]) {
        let temp = this.values[0];
        this.values[0] = this.values[1];
        this.values[1] = temp;
      }
      return;
    }

    let currentIndex = 0;
    let leftChildIndex = 1;
    let rightChildIndex = 2;
    let tempValue, biggerIndex;
    while (this.values[currentIndex] < this.values[leftChildIndex] || currentIndex < this.values[rightChildIndex]) {
      tempValue = this.values[currentIndex];
      biggerIndex = this.values.indexOf(Math.max(this.values[leftChildIndex], this.values[rightChildIndex]))
      this.values[currentIndex] = this.values[biggerIndex];
      this.values[biggerIndex] = tempValue;

      currentIndex = biggerIndex;
      leftChildIndex = (2 * currentIndex) + 1;
      rightChildIndex = ( 2 * currentIndex) + 2;
    }
    console.log(this.values);
  }
}

