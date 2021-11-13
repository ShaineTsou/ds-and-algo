/* 
Implement Merge Sort
*/

// ---- Test Cases ----
const nums = [99, 34, 56, 7, 8, 10, 73, 21]; // [7, 8, 10, 21, 34, 56, 73, 99]

// ---- Solution ----
const merge = (leftArr, rightArr) => {
  const mergedArr = [];

  let left = 0;
  let right = 0;

  while (left < leftArr.length && right < rightArr.length) {
    const leftVal = leftArr[left];
    const rightVal = rightArr[right];

    if (leftVal <= rightVal) {
      mergedArr.push(leftVal);
      left++;
    } else {
      mergedArr.push(rightVal);
      right++;
    }
  }

  if (left < leftArr.length) {
    mergedArr.push(...leftArr.slice(left));
  } else {
    mergedArr.push(...rightArr.slice(right));
  }

  return mergedArr;
};

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const mid = Math.floor((0 + arr.length - 1) / 2);

  let leftArr = arr.slice(0, mid + 1);
  let rightArr = arr.slice(mid + 1);

  leftArr = mergeSort(leftArr);
  rightArr = mergeSort(rightArr);

  return merge(leftArr, rightArr);
};

console.log(mergeSort(nums)); // [7, 8, 10, 21, 34, 56, 73, 99]

// ---- Space and Time Complexity ----
/*
Time: O(n log n)
Space: O(n)
*/
