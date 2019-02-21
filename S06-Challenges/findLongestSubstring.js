/**
 * Prompt: Write a function called findLongestSubstring which accepts a string and returns the length
 * of the longest substring with all distinct characters.
 */

 const findLongestSubstring = (string) => {
  if (!string.length) return '';
  if (string.length === 1) return string;

  let start = 0;
  let end = 0;
  let overallLongest = 1;
  let result = '';

  while (end < string.length) {
    tempLongest = 0;
    uniqueChars = {};

    for (let i = start; i < end; i += 1) {
      let currentChar = string[i];
      if (uniqueChars[currentChar] === undefined) {
        uniqueChars[currentChar] = 1;
        tempLongest += 1;
        end += 1;

      } else {

        if (tempLongest > overallLongest) {
          result = Object.keys(uniqueChars).join('');
        }
        start += 1;
      }
    }
  }
  return result;
 }



 /**
  * Example: 
  * 'thecatinthehat' ==> returns 7 for 'hecatin'
  * 'game' ==> returns 4
  *   
  */
 