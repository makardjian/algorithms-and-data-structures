/*
Prompt: Write a function called SameFrequency, which accepts two arrays. The function should
return true if every value in the array has its corresponding value squared in the second array.
The frequency of the values must be the same
*/
const sameFrequencyNaive = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    const arr1Elem = arr1[i];
    const arr2Elem = arr1Elem * arr1Elem;
    const arr2Index = arr2.indexOf(arr2Elem);
    if (arr2Index === -1) return false;
    arr2.splice(arr2Index, 1);
  }
  return true;
};

const sameFrequencyImproved = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  const arr1Freqs = {};
  const arr2Freqs = {};

  for (let i = 0; i < arr1.length; i += 1) {
    const arr1Elem = arr1[i];
    const arr2Elem = arr2[i];
    arr1Freqs[arr1Elem] = arr1Freqs[arr1Elem] + 1 || 1;
    arr2Freqs[arr2Elem] = arr2Freqs[arr2Elem] + 1 || 1;
  }

  const arr1FreqKeys = Object.keys(arr1Freqs);

  for (let i = 0; i < arr1FreqKeys.length; i += 1) {
    const key1 = arr1FreqKeys[i];
    const key2 = key1 * key1;
    if (!(key2 in arr2Freqs)) return false;
    if (arr1Freqs[key1] !== arr2Freqs[key2]) return false;
  }

  return true;
};

/*
Prompt: Givnen two strings, write a funciton to determine if the second string is an anagram
of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another,
such as 'cinema' formed from 'iceman'.
*/
const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const str1Freqs = {};
  const str2Freqs = {};

  for (let i = 0; i < str1.length; i += 1) {
    const char1 = str1[i];
    const char2 = str2[i];
    str1Freqs[char1] = str1Freqs[char1] + 1 || 1;
    str2Freqs[char2] = str2Freqs[char2] + 1 || 1;
  }

  const str1FreqKeys = Object.keys(str1Freqs);

  for (let i = 0; i < str1FreqKeys.length; i += 1) {
    const key = str1FreqKeys[i];
    if (!(key in str2Freqs)) return false;
    if (str1Freqs[key] !== str2Freqs[key]) return false;
  }

  return true;
};
