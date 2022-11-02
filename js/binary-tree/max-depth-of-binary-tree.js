/* 
Maximum Depth of Binary Tree (https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- Given the root of a binary tree, return its maximum depth.
- Maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Constraints:
- Return 0, if the tree is empty.
*/

// ---- Solution 1 ----
const dfs = function (currentNode, currentDepth, maxDepth) {
  if (currentNode.left) {
    maxDepth = dfs(currentNode.left, currentDepth + 1, maxDepth);
  }

  if (currentNode.right) {
    maxDepth = dfs(currentNode.right, currentDepth + 1, maxDepth);
  }

  return Math.max(currentNode, maxDepth);
};

const maxDepth = function (root) {
  if (!root) return 0;

  return dfs(root, 1, 0);
};

// ---- Space and Time Complexity 1 ----
/*
Time: O(n)
Space: O(n)
*/

// ---- Solution 2 ----
const dfs = function (currentNode, currentDepth) {
  if (!currentNode) return currentDepth;

  currentDepth++;

  return Math.max(
    dfs(currentNode.left, currentDepth),
    dfs(currentNode.right, currentDepth)
  );
};

const maxDepth = function (root) {
  return dfs(root, 0);
};

// ---- Space and Time Complexity 2 ----
/*
Time: O(n)
Space: O(n)
*/
