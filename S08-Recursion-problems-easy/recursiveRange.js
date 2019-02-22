/**
 * Prompt: Write a function called recursiveRange which accepts a number and adds up all the
 * numbers from 0 to the number passed to the function.
 */

 // RecursiveRangeHelper
 const recursiveRange = (num) => {
   let current = 0;
   let result = 0;
   const helper = () => {
     if (current === num) return;
     current += 1;
     result += current;
     helper();
   }
   helper();
   return result;
 }

 // RecursiveRangePure
 const recursiveRangePure = (num) => {
   if (num === 0) return 0;
   return num + recursiveRangePure(num - 1);
 }

