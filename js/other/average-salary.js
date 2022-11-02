/* 
Average Salary Excluding the Minimum and Maximum (https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/)
- Given an array of unique integers representing each employee's salary
- Return the average salary of employees excluding the min and max salary
- Answers within 10^(-5) of the actual answer will be accepted

Constraints:
- There are at least 3 employees
*/

// ---- Test Cases ----
const testCase1 = [4000, 3000, 1000, 2000]; // 2500.00000
const testCase2 = [1000, 2000, 3000]; // 2000.00000

// ---- Solution ----
const average = (salaries) => {
  // check params
  if (!Array.isArray(salaries) || salaries.length < 3) return "Invalid Input";

  let min = Infinity;
  let max = -Infinity;
  let total = 0;

  for (let salary of salaries) {
    if (salary < min) {
      min = salary;
    }

    if (salary > max) {
      max = salary;
    }

    total += salary;
  }

  return (total - min - max) / (salaries.length - 2);
};

console.log(average(testCase1)); // 2500.00000
console.log(average(testCase2)); // 2000.00000

// ---- Space and Time Complexity ----
/*
Time: O(1)
Space: O(1)
*/
