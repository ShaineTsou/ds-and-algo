/* 
Find Nearest Point That Has the Same X or Y Coordinate (https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/)
- Given 2 positive integers representing your location on a Cartesian grid, (x, y),
- Given an array of points where each element is an array representing the coordinates of that point
- The point is valid when it shares the same x-coordinate or y-coordinate as your location
- Return the index of the valid point with the smallest Manhatten distance from your current location.

Constraints:
- When there are multiple valid points with the same Manhattan distance, return the smallest index
- If there is no valid points, return -1
- The distance can be 0
- There are at least one point in the points array
- The x-coordinate and y-coordinate of all points are positive

Side note:
- Manhattan distance, also known as city block distance or taxicab geometry
- is |x1 - x2| + |y1 - y2|
*/

// ---- Test Cases ----
const testCase1 = {
  x: 3,
  y: 4,
  points: [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 4],
    [2, 4],
    [2, 3],
    [4, 4],
  ],
}; // 2

const testCase2 = {
  x: 3,
  y: 4,
  points: [[3, 4]],
}; // 0

const testCase3 = {
  x: 3,
  y: 4,
  points: [[2, 3]],
}; // -1

// ---- Solution ----
const nearestValidPoint = (x, y, points) => {
  let minMDistance = Infinity;
  let minClosestPointIndex = -1;

  points.forEach((point, index) => {
    if (point[0] === x || point[1] === y) {
      const mDistance = Math.abs(point[0] - x) + Math.abs(point[1] - y);

      if (mDistance < minMDistance) {
        minMDistance = mDistance;
        minClosestPointIndex = index;
      }
    }
  });
  return minClosestPointIndex;
};

console.log(nearestValidPoint(testCase1.x, testCase1.y, testCase1.points)); // 2
console.log(nearestValidPoint(testCase2.x, testCase2.y, testCase2.points)); // 0
console.log(nearestValidPoint(testCase3.x, testCase3.y, testCase3.points)); // -1

// ---- Space and Time Complexity ----
/*
Given n points:
Time: O(n)
Space: O(1)
*/
