/* 
Square of a Sorted Array (https://leetcode.com/problems/squares-of-a-sorted-array/)
- Given an integer array, nums, sorted in non-decreasing order
- Return an array of the squares of each number sorted in non-decreasing order

Constraints:
- There can be negative integers or 0
- There can be duplicates
*/

// ---- Test Cases ----
const nums1 = [-4, -1, 0, 3, 10]; // [0, 1, 9, 16, 100]
const nums2 = [-7, -3, 2, 3, 11]; // [4, 9, 9, 49, 121]
const nums3 = [-1, 1, 1, 5]; // [1, 1, 1, 25]

// ---- Solution 1 ----
/*
Square each element and sort the new array
*/
const sortedSquares = function (nums) {
  return nums.map((num) => num ** 2).sort((a, b) => a - b);
};

console.log(sortedSquares(nums1)); // [0, 1, 9, 16, 100]
console.log(sortedSquares(nums2)); // [4, 9, 9, 49, 121]
console.log(sortedSquares(nums3)); // [1, 1, 1, 25]
// ---- Space and Time Complexity 1 ----
/*
Time: O(n log n) // It depends on different browser
Space: O(n)
*/

// ---- Solution 2 ----
/*
Two Pointer Technique
*/
const sortedSquares2 = function (nums) {
  const ans = new Array(nums.length);

  let left = 0;
  let right = nums.length - 1;
  let highestPos = nums.length - 1;

  while (highestPos >= 0) {
    const leftSquaredVal = nums[left] ** 2;
    const rightSquaredVal = nums[right] ** 2;

    if (leftSquaredVal > rightSquaredVal) {
      ans[highestPos] = leftSquaredVal;
      highestPos--;
      left++;
    } else {
      ans[highestPos] = rightSquaredVal;
      highestPos--;
      right--;
    }
  }

  return ans;
};

console.log(sortedSquares2(nums1)); // [0, 1, 9, 16, 100]
console.log(sortedSquares2(nums2)); // [4, 9, 9, 49, 121]
console.log(sortedSquares2(nums3)); // [1, 1, 1, 25]
// ---- Space and Time Complexity 2 ----
/*
Time: O(n)
Space: O(n)
*/
