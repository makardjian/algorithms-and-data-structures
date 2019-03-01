
class maxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    //push initial value into the heap
    this.values.push(value);
    if (this.values.length === 1) return this.values;
    let childIndex = this.values.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    let parentValue = this.values[parentIndex]
    let childValue = this.values[childIndex];
    let tempValue;

    while (childValue > parentValue) {
      // store the parent value in temporary variable
      tempValue = parentValue;
      // reassign the element at the parent index to equal the child value.
      this.values[parentIndex] = this.values[childIndex];
      // reassign the element at the childIndex to equal the old parent value
      this.values[childIndex] = tempValue;

      childIndex = parentIndex;
      parentIndex = Math.floor((parentIndex - 1) / 2);
      parentValue = this.values[parentIndex];
      childValue = this.values[childIndex]
    }
    return this.values;
  }
}

