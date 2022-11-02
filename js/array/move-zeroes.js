/* 
Move Zeroes (https://leetcode.com/problems/move-zeroes/)
- Given an integer array, nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements
- Do this in-place without making a copy of the array

Constraints:
- Return the same array if there's no 0's in the nums array
*/

// ---- Test Cases ----
const nums1 = [1, 0, 3, -4, 0, 5]; // [1, 3, -4, 5, 0, 0]
const nums2 = [1, 3, -4, 5]; // [1, 3, -4, 5]
const nums3 = [0]; // [0]

// ---- Solution 1 ----
const moveZeroes = function (nums) {
  if (nums.length < 2) return nums;

  let length = nums.length;
  let pointer = 0;

  while (pointer < length) {
    const currentNum = nums[pointer];

    if (currentNum === 0) {
      const zero = nums.splice(pointer, 1)[0];
      nums.push(zero);
      length--;
    } else {
      pointer++;
    }
  }

  return nums;
};

console.log(moveZeroes(nums1)); // [1, 3, -4, 5, 0, 0]
console.log(moveZeroes(nums2)); // [1, 3, -4, 5]
console.log(moveZeroes(nums3)); // [0]

// ---- Space and Time Complexity 1 ----
/*
Time: O(n^2)
-> .splice method has a time complexity of O(n), and it's placed within a while loop
Space: O(1)
*/
