"use strict";

// Complete this algo
// eslint-disable-next-line complexity
const binarySearch = (array, target) => {
  if (array.length === 0) {
    return false;
  } else {
    let middleIndex = Math.ceil(array.length / 2);

    if (array[middleIndex] === target) {
      return true;
    } else if (array[middleIndex] > target) {
      for (let i = middleIndex - 1; i > 0; i--) {
        if (array[i] === target) {
          return true;
        }
      }
    } else if (array[middleIndex] < target) {
      for (let i = middleIndex + 1; i < array.length; i++) {
        if (array[i] === target) {
          return true;
        }
      }
    }
    return false;
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
