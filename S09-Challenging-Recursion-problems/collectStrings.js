/*
Write a function called collectStrings which accepts an object
and returns an array of all the values in the obejct that have a 
typeof 'string'.
*/

const collectStrings = (obj) => {
  let result = [];

  var traverse = function(obj) {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'string') {
        result.push(obj[key]);
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        traverse(obj[key]);
      }
    });
  };
  
  traverse(obj);
  return result;
}