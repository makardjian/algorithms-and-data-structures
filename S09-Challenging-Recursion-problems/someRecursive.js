/*
Write a recursive function called someRecursive which accepts an array
and a callback. The function returns true if a single value in
the array returns true when passed to the callback. Otherwise it
returns false.
*/

function someRecursive(arr, callback){
  if (arr.length === 0) return false;
  let result = callback(arr[arr.length - 1]);
  arr = arr.slice(0, arr.length - 1);
  return result || someRecursive(arr, callback);
}
