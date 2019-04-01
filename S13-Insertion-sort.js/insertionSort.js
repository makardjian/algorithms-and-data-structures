const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i += 1) {
    let current = arr[i];
    for (let j = i - 1; i >= 0 && arr[j] > current; j -= 1) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  return arr;
}

