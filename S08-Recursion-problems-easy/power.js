/**
 * Prompt: Write a function called power which accepts a base and an exponent. The function
 * should return the power of the base to the exponent. This function should mimic the
 * functionality of Math.pow(). You do not need to worry about negative bases and exponents.
 */

//  Helper Recursion
 const power = (base, exponent) => {
   if (!exponent) return 1;
   if (!base) return 0;
   let result = base;

   const helper = () => {
     if (exponent === 1) return result;
     result *= base;
     exponent -= 1;
     helper();
   }
   helper();
   return result;
 }

 // Pure Recursion
const powerPure = (base, exponent) => {
  //  Check for Edge Case
  if (base === 0) return 0;
  if (exponent === 0) return 1;
  //  Base Case
  if (exponent === 1) return base;
  return base *= powerPure(base, exponent - 1);
}
