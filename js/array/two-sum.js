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

// ---- Solution 1 ----
const twoSum1 = function (nums, target) {
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

console.log(twoSum1(arr1, target1)); // [4, 3]
console.log(twoSum1(arr2, target2)); // null
console.log(twoSum1(arr3, target3)); // [1, 0]
console.log(twoSum1(arr4, target4)); // null
console.log(twoSum1(arr5, target5)); // null

// ---- Space and Time Complexity 1 ----
/*
Time: O(n)
Space: O(n)
*/

// ---- Solution 2: Using Map object ----
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
  const seenMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    const numToFind = target - nums[i]
    if (seenMap.has(numToFind)) {
      return [seenMap.get(numToFind), i]
    }
    seenMap.set(nums[i], i)
  }
  return null
};

console.log(twoSum2(arr1, target1)); // [3, 4]
console.log(twoSum2(arr2, target2)); // null
console.log(twoSum2(arr3, target3)); // [0, 1]
console.log(twoSum2(arr4, target4)); // null
console.log(twoSum2(arr5, target5)); // null

// ---- Space and Time Complexity 2 ----
/*
Time: O(n)
Space: O(n)
*/
