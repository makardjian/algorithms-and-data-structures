/*
Prompt: Write a function called averagePair. Given a sorted array of integers, and a target average,
determine if there is a pair of values in the array where the average of the pair equals the target
average. There may be more than one pair that matches the average target.
*/

const averagePair = function(arr, target) {
  if (arr.length < 2) return false;
  let lower = 0
  let higher = arr.length - 1;

  while (lower < higher) {
      let avg = (arr[lower] + arr[higher]) / 2;
      if (avg === target) return true; 
      else if (avg < target) {
          lower += 1;
      } else {
          higher -= 1;
      }
  }
  return false;
}
