const merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;
  while( i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i += 1; 
    } else {
      results.push(arr2[j]);
      j += 1;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i += 1;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j += 1;
  }

  return results;
}

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let left = mergeSort(arr.slice(0, (arr.length / 2)))
  let right = mergeSort(arr.slice(arr.length / 2));
  return merge(left, right);
}
