/* 
Trapping Rain Water (https://leetcode.com/problems/trapping-rain-water/)
- Given an array of n non-negative integers representing an elevation map
- The width of each bar in the elevation map is 1
- Return the amount of water the map can trap after raining

Constraints:
- Left and right sides of the map doesn't count as bars
- There can be duplicates in the array
*/

// ---- Test Cases ----
const height1 = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]; // 8
const height2 = [4, 2, 0, 3, 2, 5]; // 9
const height3 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; // 6
const height4 = [3, 4, 3]; // 0
const height5 = [7]; // 0
const height6 = []; // 0

// ---- Solution ----
const trap = function (height) {
  if (height.length < 2) return 0;

  let left = 0;
  let right = height.length - 1;
  let maxL = 0;
  let maxR = 0;
  let maxWaterHeight = 0;
  let totalWater = 0;

  while (left < right) {
    const leftBar = height[left];
    const rightBar = height[right];

    if (leftBar > maxL) {
      maxL = leftBar;
      maxWaterHeight = Math.min(maxL, maxR);
    } else if (leftBar < maxL) {
      const waterAboveL = maxWaterHeight - leftBar;
      if (waterAboveL > 0) {
        totalWater += waterAboveL;
      }
    }

    if (rightBar > maxR) {
      maxR = rightBar;
      maxWaterHeight = Math.min(maxL, maxR);
    } else if (rightBar < maxR) {
      const waterAboveR = maxWaterHeight - rightBar;
      if (waterAboveR > 0) {
        totalWater += waterAboveR;
      }
    }

    if (maxL < maxR) {
      left++;
    } else {
      right--;
    }
  }

  return totalWater;
};

console.log(trap(height1)); // 8
console.log(trap(height2)); // 9
console.log(trap(height3)); // 6
console.log(trap(height4)); // 0
console.log(trap(height5)); // 0
console.log(trap(height6)); // 0

// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(1)
*/
