/*
Prompt: Write a function called averagePair. Given a sorted array of integers, and a target average,
determine if there is a pair of values in the array where the average of the pair equals the target
average. There may be more than one pair that matches the average target.
*/

const averagePair = function(arr, target) {
  if (arr.length < 2) {
      return false;
  }
  let pointerA = arr[0];
  let pointerB = arr[arr.length - 1];

  while (pointerB > pointerA) {
      let avg = (pointerB / pointerA)
      if (avg === target) 
        return ([pointerA, pointerB]);
      
      else if (avg > target) {
          pointerA++;
      } else {
          pointerB--;
      }
  }
  return false;
}
