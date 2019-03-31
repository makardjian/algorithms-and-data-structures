/**
 * Prompt: Given an array and a target value, write the linear search algorithm for indexOf.
 * If the target value is not in the array, return -1.
 */

 const indexOf = (arr, target) => {
   for (let i = 0; i < arr.length; i += 1) {
     if (arr[i] === target) return i;
   }
   return -1;
 }

 /**
  * Time Complexity: 
  *   Best Case: O(1) i.e. constant time;
  *   Worst Case: O(n) i.e. linear time;
  *   Average: O(n) i.e. linear time;
  */
