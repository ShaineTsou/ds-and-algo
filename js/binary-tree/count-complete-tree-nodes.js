/* 
Count Complete Tree Nodes (https://leetcode.com/problems/count-complete-tree-nodes/)
- Given the root of a complete binary tree, return the number of the nodes in the tree

Definition of a complete binary tree:
- Except for the second to last level, a node in each level has 2 children
- A node in the second to last level can have either 0 - 2 children
- All nodes in the last level are as far left as possible.

Constraints:
- The runtime of the algorithm should be less than O(n)
- Return 0 when the tree is empty
*/

// ---- Solution ----
/*
- Except the last level, all the levels above together forms full binary tree
- The number of nodes in a full binary tree is calculated by the formula: 2^height - 1
- Then use binary search to count the number of nodes in the last level
*/
const getTreeHeight = function (node) {
  let count = 1;

  while (node.left) {
    node = node.left;
    count++;
  }

  return count;
};

const isNodeExist = function (node, height, idxToFind) {
  let left = 0;
  let right = Math.pow(2, height - 1) - 1;
  let level = 1;

  while (level < height) {
    const mid = Math.ceil((left + right) / 2);

    if (idxToFind >= mid) {
      left = mid;
      node = node.right;
    } else {
      right = mid - 1;
      node = node.left;
    }

    level++;
  }

  return node !== null;
};

const countNodes = function (root) {
  if (!root) return 0;

  const height = getTreeHeight(root);

  if (height === 1) return 1;

  // Calculate total number of nodes above the last level
  const numOfNodesAbove = Math.pow(2, height - 1) - 1;

  let left = 0;
  let right = numOfNodesAbove;

  while (left < right) {
    const idxToFind = Math.ceil((left + right) / 2);

    if (isNodeExist(root, height, idxToFind)) {
      left = idxToFind;
    } else {
      right = idxToFind - 1;
    }
  }

  return numOfNodesAbove + left + 1;
};

// ---- Space and Time Complexity ----
/*
Time: O(height^2)
Space: O(1)
*/
