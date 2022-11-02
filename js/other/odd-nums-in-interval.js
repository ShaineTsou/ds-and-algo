/* 
Count Odd Numbers in an Interval Range (https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/)
- Given two non-negative integers low and high.
- Return the count of odd numbers between low and high inclusively.

Constraints:
- low and high can be the same number
*/

// ---- Test Cases ----
const testCase1 = { low: 3, high: 7 }; // 3
const testCase2 = { low: 3, high: 6 }; // 2
const testCase3 = { low: 4, high: 8 }; // 2
const testCase4 = { low: 4, high: 7 }; // 2
const testCase5 = { low: 0, high: 5 }; // 3
const testCase6 = { low: 1, high: 1 }; // 1
const testCase7 = { low: 2, high: 2 }; // 0

// ---- Solution ----
const isOdd = (num) => num % 2 === 1;

const countOdds = (low, high) => {
  // check params
  if (low < 0 || high < 0 || high < low) return "Invalid Input";

  if (low === high) {
    return isOdd(low) ? 1 : 0;
  }

  const steps = high - low;

  if (isOdd(low)) {
    return isOdd(steps) ? (steps - 1) / 2 + 1 : steps / 2 + 1;
  } else {
    return isOdd(steps) ? (steps + 1) / 2 : steps / 2;
  }
};

console.log(countOdds(testCase1.low, testCase1.high)); // 3
console.log(countOdds(testCase2.low, testCase2.high)); // 2
console.log(countOdds(testCase3.low, testCase3.high)); // 2
console.log(countOdds(testCase4.low, testCase4.high)); // 2
console.log(countOdds(testCase5.low, testCase5.high)); // 3
console.log(countOdds(testCase6.low, testCase6.high)); // 1
console.log(countOdds(testCase7.low, testCase7.high)); // 0

// ---- Space and Time Complexity ----
/*
Time: O(1)
Space: O(1)
*/
