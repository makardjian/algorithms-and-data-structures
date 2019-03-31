/*
Write a recursive function called flatten which accepts an array of arrays and
returns a new array with all values.
*/

function flatten(arr){
  let flat = [];
  
  arr.forEach(ele => {
    if (Array.isArray(ele)) {
      flat.push(...flatten(ele));
    } else {
      flat.push(ele);
    }
  });
  return flat;
}