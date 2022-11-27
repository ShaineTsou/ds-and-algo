/* 
Monotonic Array (https://leetcode.com/problems/monotonic-array/)
An array is monotonic if it is either monotone increasing or monotone decreasing.
In a nutshell, an array is monotonic if it's either in non-descending order or non-ascending order

Given an integer array nums, return true if the given array is monotonic, or false otherwise.
*/

// ---- Test Cases ----
const nums1 = [1, 2, 2, 3]; // true
const nums2 = [6, 5, 4, 4]; // true
const nums3 = [0]; // true
const nums4 = [1, 5, 3, 7]; // false

// ---- Solution ----
const checkMonotone = (nums, type) => {
  if (type === 'increasing') {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i + 1] < nums[i]) return false
    }
    return true
  } else {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i + 1] > nums[i]) return false
    }
    return true
  }
}

/**
* @param {number[]} nums
* @return {boolean}
*/
var isMonotonic = function (nums) {
  return checkMonotone(nums, 'increasing') || checkMonotone(nums, 'decreasing')
};

console.log(isMonotonic(nums1)); // true
console.log(isMonotonic(nums2)); // true
console.log(isMonotonic(nums3)); // true
console.log(isMonotonic(nums4)); // false

// ---- Space and Time Complexity ----
/*
Time: O(2n)
Space: O(1)
*/
