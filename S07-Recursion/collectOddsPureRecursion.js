/**
 * Prompt: Write a pure recursive function that returns an array containing only the odd values of an 
 * input array of integers that is passed in.
 */
const collectOddsPureRecursion = (arr) => {
  let arrCopy = [...arr];
  let result = [];
  if (!arrCopy.length) return result;
  if (arrCopy[0] % 2 === 1) result.push(arrCopy[0]);
  arrCopy = arrCopy.slice(1);
  return result.concat(collectOddsPureRecursion(arrCopy));
}
