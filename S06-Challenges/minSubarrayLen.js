/**
 * Prompt: Write a function called minSubArrayLen which accepts two paramaters - an array 
 * of positive integers and a positive integer.

 * This funciton should return the minimal length of a contiguous subarray of which the sum is 
 * greater than or equal to the integer passed to the function. If ther isn't one, return 0 instead.
 */

 const minSubArrayLen = (arr, num) => {
   let start = 0; 
   let end = 0;
   let overallMinLen = Infinity;

   while (end < arr.length) {
     let tempSum = 0;
     let tempLength = 0;
     for (let i = start; i <= end; i += 1) {
       tempSum += arr[i];
     }

     if (tempSum >= num) {
       tempLength = end - start + 1;
       overallMinLen = Math.min(tempLength, overallMinLen);
       start += 1;
     } else {
       end += 1;
     }
   }
   return overallMinLen === Infinity ? 0 : overallMinLen;
 }

/**
 * Example Input: [3, 4, 6, 3, 1, 4, 6, 10, 3, 5], 17
 * 
 *  Valid subArrays that this algo will identify:
 *  [3, 4, 6, 3, 1]
 *  [4, 6, 3, 1, 4]
 *  [6, 3, 1, 4, 6]
 *  [3, 1, 4, 6, 10]
 *  [1, 4, 6, 10]
 *  [4, 6, 10]
 *  [6, 10, 3]
 *  [10, 3, 5]
 */
