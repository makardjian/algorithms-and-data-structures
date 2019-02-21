/*
Prompt: Write a funciton called maxSubArraySum which accepts an array of integers and a number
called n. The funciton should calculate the maxiumum number of n consecutive elements in the array.
*/
const maxSubArraySum = (arr, num) => {
  let tempSum = 0;
  let max = tempSum;

  for (let i = 0; i < num; i += 1) {
      tempSum += arr[i];
  }

  for (let j = 1; j <= arr.length - num; j += 1) {
      tempSum -= (arr[j] - 1);
      tempSum += arr[j + num - 1]; 
      max = Math.max(tempSum, max);
  }
  return max;
}
