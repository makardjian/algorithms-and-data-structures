/**
 * Prompt: Write a funciton that returns an array containing only the odd values of an input array
 * Your solution must call an inner helper function recursively. 
 */

const collectOddsWithHelper = (arr) => {
  let result = [];
  let shallowCopy = [...arr];

  const helper = (input) => {
    if (input.length === 0) return;
    if (input[0] % 2 === 1) result.push(input[0]);
    input = input.slice(1);
    helper(input);
  }

  helper(shallowCopy);
  return result;
}
