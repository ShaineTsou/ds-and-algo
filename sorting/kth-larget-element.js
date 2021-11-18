/* 
Kth Largest Element in an Array (https://leetcode.com/problems/kth-largest-element-in-an-array/)
- Given an integer array, nums, and an integer, k
- Return the kth largest element in the array in the sorted order

*/

// ---- Test Cases ----
const nums1 = [5, 3, 1, 6, 4, 2];
const k1 = 2; // 5

const nums2 = [2, 3, 1, 2, 4, 2];
const k2 = 4; // 2

// ---- Solution ----
/*
- Implement a quickselect algorithm
*/
const swap = function (array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

const partition = function (array, left, right) {
  const pivotValue = array[right];
  let pivotFinalPos = left;

  for (let i = left; i < right; i++) {
    if (array[i] <= pivotValue) {
      swap(array, i, pivotFinalPos);
      pivotFinalPos++;
    }
  }
  swap(array, pivotFinalPos, right);
  return pivotFinalPos;
};

const quickSelect = function (array, left, right, targetIdx) {
  while (left < right) {
    const partitionIdx = partition(array, left, right);

    if (targetIdx === partitionIdx) {
      return array[partitionIdx];
    } else if (targetIdx > partitionIdx) {
      left = partitionIdx + 1;
    } else {
      right = partitionIdx - 1;
    }
  }

  return array[targetIdx];
};

const findKthLargest = function (nums, k) {
  return quickSelect(nums, 0, nums.length - 1, nums.length - k);
};

console.log(findKthLargest(nums1, k1)); // 5
console.log(findKthLargest(nums2, k2)); // 2
// ---- Space and Time Complexity ----
/*
Time: best and average - O(n log n), worst - O(n^2)
Space: O(log n)
*/
