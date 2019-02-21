/*
Prompt: Write a function called SumZero which accepts a sorted array of integers. The funciton
should find the first pair of integers where the sum is zero. Return a tupel that contains
both values that sum to zero or return undefined if no valid pair exists.
*/
const sumZeroNaive = (arr) => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
  return undefined;
};

const sumZeroImproved = (arr) => {
  let smaller = 0;
  let larger = arr.length - 1;
  while (smaller < larger) {
    const sum = arr[smaller] + arr[larger];
    if (sum === 0) return [arr[smaller], arr[larger]];
    if (sum < 0) smaller += 1;
    if (sum > 0) larger -= 1;
  }
  return undefined;
};

/*
Prompt: Implement a funciton called countUniqueValues that, which accepts a sorted array,
and counts the unique values in the array. There can be negative numbers in the array, but 
the array will always be sorted.
*/
const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  const copy = arr.slice();
  let i = 0;
  for (let j = 1; j < copy.length; j += 1) {
    if (copy[i] !== copy[j]) {
      i += 1;
      copy[i] = copy[j];
    }
  }
  return i + 1;
}
