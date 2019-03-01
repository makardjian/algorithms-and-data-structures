
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
}

