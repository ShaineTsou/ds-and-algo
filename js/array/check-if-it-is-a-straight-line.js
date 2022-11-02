/* 
Check If It Is a Straight Line (https://leetcode.com/problems/check-if-it-is-a-straight-line/)
- Given an array coordinates where each element is an array [x, y] representing a point in the XY plane.
- Determine whether these points make a straight line
- 

Constraints:
- There are at least 2 points in the coordinates array
- The value of coordinate x and coordinate y can also be negative number or 0

*/

// ---- Test Cases ----
const testCase1 = [[-1,-1], [0,0], [1,1], [2,2], [3,3]] // true
const testCase2 = [[0,1], [1,3], [2,5], [3, 7]] // true
const testCase3 = [[1,1], [2,2], [4,2], [5,3]] // false
const testCase4 = [[0,0],[0,1],[0,-1]] //true
const testCase5 = [[1,-8],[2,-3],[1,2]] // false


// ---- Solution ----
const checkStraightLine = (coordinates) => {
  if (coordinates.length === 2) return true

  const [firstPointX, firstPointY] = coordinates[0]
  const [secondPointX, secondPointY] = coordinates[1]
  const slope = (secondPointY - firstPointY) / (secondPointX - firstPointX)
  const intercept = firstPointY - slope * firstPointX

  // Handle vertical line
  if (slope === Infinity) {
    for (let i = 2; i < coordinates.length; i++) {
      if (coordinates[i][0] !== firstPointX) return false
    }
    return true
  } else {
    for (let i = 2; i < coordinates.length; i++) {
      const [curX, curY] = coordinates[i]
  
      if (curX * slope + intercept !== curY) return false
    }
    return true
  }
}

console.log(checkStraightLine(testCase1)); // true
console.log(checkStraightLine(testCase2)); // true
console.log(checkStraightLine(testCase3)); // false
console.log(checkStraightLine(testCase4)); // true
console.log(checkStraightLine(testCase5)); // false
