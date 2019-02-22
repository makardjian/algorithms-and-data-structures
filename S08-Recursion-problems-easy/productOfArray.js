/**
 * Prompt: Write a recursive function called productOfArray which takes in an array and returns
 * the product of all of the elements of that array.
 */

const productOfArray = (arr) => {
  if (!arr.length) return null;
  let result = 1;
  let copy = [...arr];
  const helper = () => {
    if (!copy.length) return;
    if (!copy[0]) {
      result = 0;
      return;
    }
    result *= copy[0];
    copy = copy.slice(1);
    helper();
  }
  helper();
  return result;
}

const productOfArrayPure = (arr) => {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArrayPure(arr.slice(1));
}
