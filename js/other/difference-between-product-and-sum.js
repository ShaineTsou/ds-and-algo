/* 
Subtract the Product and Sum of Digits of an Integer (https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/)
- Given an integer number n, return the difference between the product of its digits and the sum of its digits

*/

// ---- Test Cases ----
const testCase1 = 234; // 15
const testCase2 = 4421; // 21

// ---- Solution ----
const subtractProductAndSum = (n) => {
  let product = 1;
  let sum = 0;

  for (let digit of String(n)) {
    product *= Number(digit);
    sum += Number(digit);
  }

  return product - sum;
};

console.log(subtractProductAndSum(testCase1)); // 15
console.log(subtractProductAndSum(testCase2)); // 21
