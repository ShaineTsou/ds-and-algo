/* 
Richest Customer Wealth (https://leetcode.com/problems/richest-customer-wealth/)
- Given an m * n integer grid accounts where accounts[i][j] representing the amount of money the ith customer has in the jth bank.
- Return The wealth that the richest customer has.

Constraints:
- The amount of money can be negative integer
*/

// ---- Test Cases ----
const testCase1 = [[1,2,3],[3,2,1]] // 6
const testCase2 = [[1,5],[7,3], [3,5]] // 10
const testCase3 = [[2,8,7],[7,1,3], [1,9,5]] // 17

// ---- Solution ----
const sum = (arr) => arr.reduce((acc, num) => acc + num, 0)

const maximumWealth = (allCustomersAccounts) => {
  let maxWealth = -Infinity

  allCustomersAccounts.forEach((accounts) => {
    const wealth = sum(accounts)
    if (wealth > maxWealth) maxWealth = wealth
  })

  return maxWealth
}

console.log(maximumWealth(testCase1)) // 6
console.log(maximumWealth(testCase2)) // 10
console.log(maximumWealth(testCase3)) // 17
