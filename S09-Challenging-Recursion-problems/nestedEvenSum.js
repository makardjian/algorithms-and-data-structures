/*
Write a recursive function called nestedEvenSum. Return the sum of
all even numbers in an object which may contain nested objects.
*/


// helper funciton
var isEven = function (num) {
  if (num % 2 === 0) {
    return true;
  } else {return false}
} 

var nestedEvenSum = function (obj) {
  let sum = 0;
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && isEven(obj[key])) {
      sum += obj[key]; 
    }
  });
  return sum;
}
