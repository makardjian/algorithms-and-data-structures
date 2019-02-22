/**
 * 
 * Prompt: Write a recursive implementation to return the factorial of any number that is passed into 
 * your function. 
 */

const factorial = (num) => {
  if (num === 0 || num === 1) return 1;
  return num *= factorial(num - 1);
}
