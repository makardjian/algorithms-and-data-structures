const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i += 1) {
    if (arr[i] < pivot) {
      swapIdx += 1;
      if (swapIdx > 1) swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  console.log(arr);
  return swapIdx;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIdx - 1);
    // right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}
