/*
Prompt: Given two positive integers, determine if the two numbers have the same frequency of digits.
Your solution must have linear time complexity, O(n).
*/

var sameFrequency = function (num1, num2) {
  var str1 = String(num1);
  var str2 = num2.toString();
  var obj1 = {};
  var obj2 = {};

  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i += 1) {
      obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j += 1) {
      obj2[str2[j]] = (obj2[str2[j]] || 0) + 1;
  }

  for (let key in obj1) {
      if (obj2[key] === undefined || obj1[key] !== obj2[key]) {
          return false;
      }
  }
  return true;
}
