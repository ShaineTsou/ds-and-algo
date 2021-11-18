/* 
Implement Quick Sort
*/

// ---- Test Cases ----
const nums1 = [99, 34, 56, 7, 8, 10, 73, 21]; // [7, 8, 10, 21, 34, 56, 73, 99]
const nums2 = [49, 6, 87, -45, 0, 3, 87]; // [-45, 0, 3, 6, 49, 87, 87]

// ---- Solution ----
const swap = function (array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

const partition = function (array, left, right) {
  const pivotVal = array[right];
  let pivotFinalPos = left;

  for (let i = left; i < right; i++) {
    const currentVal = array[i];

    if (currentVal <= pivotVal) {
      swap(array, i, pivotFinalPos);
      pivotFinalPos++;
    }
  }

  swap(array, pivotFinalPos, right);

  return pivotFinalPos;
};

const quickSort = function (array, left, right) {
  if (right - left < 1) return array;

  let partitionIdx = partition(array, left, right);

  quickSort(array, left, partitionIdx - 1);
  quickSort(array, partitionIdx + 1, right);

  return array;
};

console.log(quickSort(nums1, 0, nums1.length - 1)); // [7, 8, 10, 21, 34, 56, 73, 99]
console.log(quickSort(nums2, 0, nums2.length - 1)); // [-45, 0, 3, 6, 49, 87, 87]

// ---- Space and Time Complexity ----
/*
Time: Best and average - O(n log n), worst(constantly choosing bad pivots) - O(n^2)
Space: O(log n)
*/
