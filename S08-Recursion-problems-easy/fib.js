/**
 * Prompt: Write a recursive function called fib which accepts a number and returns the nth
 * number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole
 * numbers 1, 1, 2, 3, 5, 8,... which starts with 1 and 1, and where every number thereafter
 * is equal to the sum of the previous two nunbers.
 * // fib(4) // 3
 * // fib(10) // 55
 */

 const fib = (num) => {
  if (num === 1 || num === 2) return 1;

  let back2 = 1;
  let back1 = 1;
  let next = back2 + back1;
  
  const helper = () => {
    if (num === 3) return;
    back2 = back1;
    back1 = next;
    next = back2 + back1;
    num -= 1;
    helper();
  }
  helper();
  return next;
 }

 const fibTwoLiner = (num) => {
   if (num <= 2) return 1;
   return fib(num - 1) + fib(num - 2);
 }
