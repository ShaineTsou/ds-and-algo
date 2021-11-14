/* 
Search Insert Position (https://leetcode.com/problems/search-insert-position/)
- Given a sorted array of distinct integers and a target value,
- Return the index if the target is found.
- Otherwise, return the index where it would be if it were inserted in order.
*/

// ---- Test Cases ----
const nums1 = [-1, 0, 3, 5, 9, 12],
  target1 = 9; // 4

const nums2 = [-1, 0, 3, 5, 9, 12],
  target2 = 2; // 2

const nums3 = [7],
  target3 = 7; // 0

const nums4 = [7],
  target4 = 3; // 0

// ---- Solution ----
const searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    const midVal = nums[mid];

    if (midVal === target) {
      return mid;
    } else if (target > midVal) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (target > nums[mid]) {
    return mid + 1;
  } else {
    return mid;
  }
};

console.log(searchInsert(nums1, target1)); // 4
console.log(searchInsert(nums2, target2)); // 2
console.log(searchInsert(nums3, target3)); // 0
console.log(searchInsert(nums4, target4)); // 0

// ---- Space and Time Complexity ----
/*
Time: O(log n)
Space: O(1)
*/
