
// naive implementation
const hash = (key, arrayLen) => {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96; //subtract 26 to get index in the English alphabet 1-26.
    total = (total + value) % arrayLen;
  }
}

// optimized implementation
const optimizedHash = (key, arrayLen) => {
  let total = 0;
  let weirdPrime = 31;
  for (let i = 0; i < Math.min(key.length, 100); i += 1) {
    let value = key[i].charCodeAt(0) - 96;
    total = (total + weirdPrime + value) % arrayLen;
  }
  return total;
}