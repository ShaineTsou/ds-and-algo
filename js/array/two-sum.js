/* 
Two Sum (https://leetcode.com/problems/two-sum/)
- Given an array of integers, return an array of indices of two numbers that add up to a given target

Constraints:
- All numbers are unique and can be negative or 0
- Return null when there's no solution
- Assume there's only 1 pair of numbers can add up to the target
- The order of indices in the returned array doesn't matter
*/

// ---- Test Cases ----
const arr1 = [1, 3, 7, 9, 2];
const target1 = 11;
// -> [3, 4] or [4, 3]

const arr2 = [1, 3, 7, 9, 2];
const target2 = 25;
// -> null

const arr3 = [1, 6];
const target3 = 7;
// -> [0, 1] or [1, 0]

const arr4 = [5];
const target4 = 10;
// -> null

const arr5 = [];
const target5 = 7;
// -> null

// ---- Solution ----
const twoSum = function (nums, target) {
  if (nums.length <= 1) return null;

  const seenNums = {};

  for (let i = 0; i < nums.length; i++) {
    const currentVal = nums[i];
    const numToFind = target - currentVal;

    if (numToFind in seenNums) {
      return [i, seenNums[numToFind]];
    }

    seenNums[currentVal] = i;
  }

  return null;
};

console.log(twoSum(arr1, target1)); // [4, 3]
console.log(twoSum(arr2, target2)); // null
console.log(twoSum(arr3, target3)); // [1, 0]
console.log(twoSum(arr4, target4)); // null
console.log(twoSum(arr5, target5)); // null

// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(n)
*/
