/*
Maximum Subarray (https://leetcode.com/problems/maximum-subarray/)
- contiguous part of an array -> subarray
- subarray at least one number
- return the sum of a subarray with the largest sum

Constraints:
- When the array only contains one element, return its value
- There can be negative integer
- The array is not sorted
- We can't add up the same element to get a sum
*/
// ---- Solution ----
/*
- Kadane's Algorithm (https://en.wikipedia.org/wiki/Maximum_subarray_problem#Kadane's_algorithm)
*/
const maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];

  let prevSum = 0;
  let max = -Infinity;

  for (let number of nums) {
    prevSum = Math.max(number, prevSum + number);
    max = Math.max(max, prevSum);
  }

  return max;
};

// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(1)
*/
