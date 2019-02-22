/**
 * Prompt: Write a function which takes in two strings and checks whether the characters in the first string
 * form a subsequence of the characters in the second string. In other words, the function should check whether
 * the characters in the first string appear somewhere in the second string, without their order changing,
 * but the characters don't necessarily need to be consecutive.
 * 
 * (sting, sing) ==> returns true
 * (abc, acb) ==> returns false
 */

const isSubSequence = function (subString, fullString) {
  let scout = 0;
  let subPointer = 0;

  while (scout < fullString.length) {
    if (subString[subPointer] === fullString[scout]) {
      scout += 1;
      subPointer += 1;
    } else {
      scout += 1;
    }

    if (subPointer === subString.length) return true;
  }
  return false;
}

/**
 * Brainstorm: Two pointers will start out pointing at index zero of the two respective strings.
 * if there's a match between fullString[pointer1] and subString[pointer2], then both pointers will
 * get incremented. However, if there is not a match, then we only want to increment pointer1
 * which will act as a scout looking for the letter that subString[poointer2] is stuck on. 
 * Pointer 1 will keep incrementing while pointer1 < fullString.length.,
 * but pointer2 will only increment if there is a match. 
 * 
 * If pointer2 ever gets incremented more than the number of letters in the subString,
 * then we know that there was a match, so we can break out and return true.
 */
