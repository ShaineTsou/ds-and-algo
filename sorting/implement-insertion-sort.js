/* 
Implement Insertion Sort
*/

// ---- Test Cases ----
const nums = [99, 34, 56, 7, 8, 10, 73, 21]; // [7, 8, 10, 21, 34, 56, 73, 99]

// ---- Solution ----
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] <= array[j]) {
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }

  return array;
};

console.log(insertionSort(nums)); // [7, 8, 10, 21, 34, 56, 73, 99]

// ---- Space and Time Complexity ----
/*
Time: worst case - O(n^2), best case - Ω(n)
Space: O(1)
*/
