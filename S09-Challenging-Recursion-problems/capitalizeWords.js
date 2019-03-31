/*
Write a recursive function called capitalizeWords. Given an array
of words, return a new array containing each word capitalized.
*/

var capitalizeWords = function(arr) {
  if (arr.length === 0) return arr;
  let lastEle = arr.pop().toUpperCase();
  //set the array to be concatenated to as the
  //recursive call to retain the correct order of elements.
  return capitalizeWords(arr).concat(lastEle);
}
