/**
 * Prompt: Given a string and a substring, write an itterative function which returns the number of times
 * the substring appears in the string. 
 */

 const stringSearchNaive = (str, subStr) => {
   let counter = 0;
   for (let i = 0; i < str.length - subStr.length; i += 1) {
     for (let j = 0; j < subStr.length; j += 1) {
       if (str[i + j] !== subStr[j]) break;
       if (j === subStr.length - 1) counter += 1;
     }
   }
   return counter;
 }

 /**
  * Time Complexity: O(n ^2) 
  */
