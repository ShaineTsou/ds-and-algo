/* 
Reshape the Matrix (https://leetcode.com/problems/reshape-the-matrix/)
- Given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
- The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
- If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
*/

// ---- Test Cases ----
const testCase1 = {
  mat: [[1, 2], [3, 4]],
  r: 1,
  c: 4,
} // [[1, 2, 3, 4]]

const testCase2 = {
  mat: [[1, 2], [3, 4]],
  r: 2,
  c: 4,
} // [[1, 2], [3, 4]]

const testCase3 = {
  mat: [[1, 2], [3, 4], [5, 6]],
  r: 2,
  c: 3,
} // [[1, 2, 3], [4, 5, 6]]

// ---- Solution ----
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  // Check is params possible
  const matRow = mat.length
  const matCol = mat[0].length

  if (r * c !== matRow * matCol) return mat

  // Reshape matrix
  const flattened = mat.reduce((acc, currentRow) => {
    acc.push(...currentRow)
    return acc
  }, [])
  const result = []
  let offset = 0

  while (result.length < r) {
    result.push(flattened.slice(offset, offset + c))
    offset += c
  }
  return result
};

console.log(matrixReshape(testCase1.mat, testCase1.r, testCase1.c))
console.log(matrixReshape(testCase2.mat, testCase2.r, testCase2.c))
console.log(matrixReshape(testCase3.mat, testCase2.r, testCase3.c))

// ---- Space and Time Complexity ----
/*
Time: O(2n)
Space: O(2n)
*/