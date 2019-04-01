const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

const selectionSort = (arr) => {
  let minIndex, willSwap;
  for (let i = 0; i < arr.length; i += 1) {
    willSwap = false;
    minIndex = i;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        willSwap = true;
      }
    }
    if (willSwap) swap(arr, i, minIndex);
  }
  return arr;
}