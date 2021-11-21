/* 
Find First and Last Position of Element in Sorted Array (https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
- Given an array of integers, nums, sorted in non-decreasing order
- Return an array of the starting and ending position of a given target value
- Return [-1, -1] if the target is not found in the array

Constraints:
- nums can be an empty array
- There can be duplicates
- The runtime complexity should be O(log n)
*/

// ---- Test Cases ----
const nums1 = [1, 3, 3, 5, 5, 5, 8, 9],
  target1 = 5; // [3, 5]

const nums2 = [1, 3, 3, 5, 5, 5, 8, 9],
  target2 = 9; // [7, 7]

const nums3 = [1, 3, 3, 5, 5, 5, 8, 9],
  target3 = 10; // [-1, -1]

const nums4 = [],
  target4 = 2; // [-1, -1]

// ---- Solution ----
const binarySearch = function (nums, left, right, target) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midVal = nums[mid];

    if (target === midVal) {
      return mid;
    } else if (target > midVal) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const searchRange = function (nums, target) {
  if (!nums.length) return [-1, -1];

  const firstPos = binarySearch(nums, 0, nums.length - 1, target);

  if (firstPos === -1) return [-1, -1];

  let startPos = firstPos;
  let endPos = firstPos;
  let temp1;
  let temp2;

  while (startPos !== -1) {
    temp1 = startPos;

    startPos = binarySearch(nums, 0, startPos - 1, target);
  }

  while (endPos !== -1) {
    temp2 = endPos;

    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
  }

  return [temp1, temp2];
};

console.log(searchRange(nums1, target1)); // [3, 5]
console.log(searchRange(nums2, target2)); // [7, 7]
console.log(searchRange(nums3, target3)); // [-1, -1]
console.log(searchRange(nums4, target4)); // [-1, -1]

// ---- Space and Time Complexity ----
/*
Time: O(log n)
Space: O(1)
*/
