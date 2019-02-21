/**
 * Prompt: Write a function which takes in two strings and checks whether the characters in the first string
 * form a subsequence of the characters in the second string. In other words, the function should check whether
 * the characters in the first string appear somewhere in the second string, without their order changing.
 */

var isSubSequence = function (subString, fullString) {
  //sliding Window approach
  let window = fullString.slice(0, subString.length)

  if (window === subString) return true;

  for (let i = 1; i < fullString.length - window.length; i++) {
      window += fullString[i + window.length - 1]
      window = window.slice(1)
      if (window === subString) {
          return true;
      }
  }
  return false
}
