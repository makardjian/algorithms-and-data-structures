const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

const bubbleSort = (arr) => {
  let innerLoopStop = arr.length - 1;
  let didSwap;
  for (let i = 0; i < arr.length; i += 1) {
    didSwap = false;
    for (let j = 0; j < innerLoopStop; j += 1) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        didSwap = true;
      }
    }
    if (didSwap === false) break;
    innerLoopStop -= 1;
  }
  return arr;
}
