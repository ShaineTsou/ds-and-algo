/* 
Container With Most Water (https://leetcode.com/problems/container-with-most-water/)
- Given an array of n non-negative integers
- The value of the i-th item represents the hegiht of the vertical line on a chart
- Find two lines together with the x-axis that forms a container which would hold the greatest amount of water
- Return the area of the water it would hold

Constraints:
- The thickness of the lines doesn't affect the area
- The left and right sides of the chart do not count as lines
- Higher lines inside the container do not affect the area
*/

// ---- Test Cases ----
const height1 = [1, 8, 6, 2, 9, 4]; // 24
const height2 = [7, 1, 2, 3, 9]; // 28
const height3 = [1, 1]; // 1
const height4 = [0, 0]; // 0
const height5 = [7]; // 0
const height6 = []; // 0

// ---- Solution ----
/*
Formula: waterArea = min(leftLine, rightLine) * (distance between leftLine and rightLine)

- Start from the greatest distance, then move left or right pointer inwards until both pointers bump into each other
- As pointers move inwards, the distance decreases, in order to find a greater water area, we should find a greater min(leftLine, rightLine)
- So on each iteration, move the lower line between leftLine and rightLine
*/

const maxArea = function (height) {
  if (height.length <= 1) return 0;

  let maxWaterArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const leftLine = height[left];
    const rightLine = height[right];

    if (leftLine < rightLine) {
      const waterArea = leftLine * (right - left);
      maxWaterArea = Math.max(maxWaterArea, waterArea);
      left++;
    } else {
      const waterArea = rightLine * (right - left);
      maxWaterArea = Math.max(maxWaterArea, waterArea);
      right--;
    }
  }
  return maxWaterArea;
};

console.log(maxArea(height1)); // 24
console.log(maxArea(height2)); // 28
console.log(maxArea(height3)); // 1
console.log(maxArea(height4)); // 0
console.log(maxArea(height5)); // 0
console.log(maxArea(height6)); // 0

// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(1)
*/
