/* 
Binary Search (https://leetcode.com/problems/binary-search/)
- Given an array of unique integers, nums, sorted in ascending order, and an integer, target
- Write a function to search target in nums with O(log n) time complexity
- Return the index of target if it exists, otherwise return -1
*/

// ---- Test Cases ----
const nums1 = [-1, 0, 3, 5, 9, 12],
  target1 = 9; // 4

const nums2 = [-1, 0, 3, 5, 9, 12],
  target2 = 2; // -1

const nums3 = [7],
  target3 = 7; // 0

const nums4 = [7],
  target4 = 3; // -1

// ---- Solution ----
const binarySearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const midIdx = Math.floor((left + right) / 2);
    const midVal = nums[midIdx];

    if (target === midVal) {
      return midIdx;
    } else if (target > midVal) {
      left = midIdx + 1;
    } else {
      right = midIdx - 1;
    }
  }

  return -1;
};

console.log(binarySearch(nums1, target1)); // 4
console.log(binarySearch(nums2, target2)); // -1
console.log(binarySearch(nums3, target3)); // 0
console.log(binarySearch(nums4, target4)); // -1

// ---- Space and Time Complexity ----
/*
Time: O(log n)
Space: O(1)
*/
