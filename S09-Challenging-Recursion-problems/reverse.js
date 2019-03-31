/*
Write a recursive function which accepts a string and returns a new
string in reverse.
*/

function reverse(str){
  if (!str.length) return '';
  let newStr = str.slice(-1);
  str = str.slice(0, str.length -1);
  return newStr + reverse(str);
}
