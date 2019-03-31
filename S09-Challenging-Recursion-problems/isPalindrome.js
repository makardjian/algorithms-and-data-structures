/*
Write a recursive function called is Palindrome which returns true if
the string passsed to it is a palindrome (reads the same forward
  and back)
*/

function isPalindrome(str){
  const reverseString = (s) => {
      if (s.length === 0) return '';
      let reversed = s.slice(-1);
      s = s.slice(0, s.length - 1);
      return reversed.concat(reverseString(s));
  }
  return reverseString(str) === str;
}
