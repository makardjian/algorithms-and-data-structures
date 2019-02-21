/*
Prompt: Implement a function called areThereDuplicates, which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments that are passed in.
*/

const areThereDuplicatesFreqCounter = (...args) => {
  const freqs = {};
  for (let i = 0; i < args.length; i += 1) {
    const elem = args[i];
    freqs[elem] = freqs[elem] + 1 || 1;
  }
  const keys = Object.keys(freqs);
  for (let i = 0; i < keys.length; i += 1) {
    if (freqs[keys[i]] !== 1) return true;
  }
  return false;
};

const areThereDuplicatesOneLiner = (...args) => {
  new Set(args).size !== args.length;
}
