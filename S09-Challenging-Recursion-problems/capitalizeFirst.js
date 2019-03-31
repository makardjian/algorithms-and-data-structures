/*
Write a recursive function called capitalizeFirst. Given an array
of strings, capitalize the first letter of each string in the array.
*/

function capitalizeFirst (arr) {
  if (arr.length === 0) return arr;
  let firstEle = arr.shift();
  firstEle = firstEle[0].toUpperCase().concat(firstEle.slice(1));
  return [firstEle].concat( capitalizeFirst(arr));
}
