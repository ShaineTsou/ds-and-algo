/* 
First Bad Version (https://leetcode.com/problems/first-bad-version/)
- Given an API, isBadVersion(version), which determine whether a version of the product is bad,
- And an array of n versions [1, 2, ..., n],
- Find the first bad version of a new product where each version is based on the previos version.
- All the versions after a bad version are also bad

*/

// ---- Solution ----
const solution = function (isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;
    let start = -1;

    while (left <= right) {
      const midVer = Math.floor((left + right) / 2);

      if (isBadVersion(midVer)) {
        start = midVer;
        right = midVer - 1;
      } else {
        left = midVer + 1;
      }
    }

    return start;
  };
};

// ---- Space and Time Complexity ----
/*
Time: O(log n)
Space: O(1)
*/
