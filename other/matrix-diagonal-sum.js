/* 
Matrix Diagonal Sum (https://leetcode.com/problems/matrix-diagonal-sum/)
- Given a square matrix mat, return the sum of the matrix diagonals
- Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal

*/

// ---- Test Cases ----
const testCase1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
] // 25

const testCase2 = [
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1],
] // 8

const testCase3 = [
  [3,5],
  [7,9],
] // 24

const testCase4 = [
  [6],
] // 6

// ---- Solution ----
/**
 * Return the sum of the matrix diagonals
 * @param {number[][]} mat 
 * @return {number}
 */
const diagonalSum = (mat) => {
  return mat.reduce((acc, currentRow, currentRowIndex) => {
    const secondaryDiagonalIndex = currentRow.length - currentRowIndex - 1

    let subtotal
    if (secondaryDiagonalIndex !== currentRowIndex) {
      subtotal = currentRow[currentRowIndex] + currentRow[secondaryDiagonalIndex]
    } else {
      subtotal = currentRow[currentRowIndex]
    }

    return acc + subtotal
  }, 0)
}

console.log(diagonalSum(testCase1)) // 25
console.log(diagonalSum(testCase2)) // 8
console.log(diagonalSum(testCase3)) // 24
console.log(diagonalSum(testCase4)) // 6
