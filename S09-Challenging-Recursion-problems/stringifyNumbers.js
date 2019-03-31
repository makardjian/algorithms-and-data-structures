/*
Write a funciton called stringifyNumbers which takes in an object
and returns a new object that is identical to the input object, 
but everywhere there was a number on the input object, the output
object will contain a string. You don't need to worry about arrays,
but you do need to take care of nested objects.
*/ 

var stringifyNumbers = (obj) => {
  let newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = String(obj[key]);
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}