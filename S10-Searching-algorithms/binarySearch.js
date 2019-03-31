/**
 * Prompt A: Given a sorted array of integers and a target value, write a binary search
 * algorithm which returns the correct index of the target value.
 * 
 * PromptB: Given an array of all the United States sorted in alphabetical order, and a target state,
 * return the index of the target state using a binary search algorithm.
 */

const binarySearchIntegers = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let middleIndex = Math.floor(arr.length / 2);

  while (leftIndex <= rightIndex) {
    if (arr[middleIndex] === target) return middleIndex;
    else if (arr[middleIndex] < target) {
        leftIndex = middleIndex + 1;
        middleIndex = Math.floor((leftIndex + rightIndex)/ 2)
    } else {
        rightIndex = middleIndex - 1;
        middleIndex = Math.floor((leftIndex + rightIndex)/ 2)
    }
  }
  return -1;
}

/**
 * Time Complexity:
 *  Worst Case: O(log(n)) i.e. logarithmic time complexity.
 *  Best Case: O(1) i.e. constant time complexity.
 *  Average: O(log(n)) i.e. logarithmic time complexity.
 */
