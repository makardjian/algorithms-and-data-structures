/**
 * Prompt: Given an array of integers and a number, write a function called maxSubArraySum, which finds
 * the maxiumum sum of a subarrawy with the length of the number passed to the function. 
 * NOTE that a subarray must consist of consecutive elements from the original array.
 */

 const maxSubArraySum = (arr, num) => {
   if (arr.length < num) return null;

   let temp = 0;

   for (let i = 0; i < num; i += 1) {
     temp += arr[i]; 
   }

   let max = temp;

   for (let i = 1; i <= arr.length - num; i += 1) {
     temp -= arr[i - 1];
     temp += arr[i + (num - 1)];
     if (temp > max) {
       max = temp;
     } 
   }
   return max;
 }
