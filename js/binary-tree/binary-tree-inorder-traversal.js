/* 
Binary Tree Inorder Traversal (https://leetcode.com/problems/binary-tree-inorder-traversal/)
- Given the root of a binary tree, return the inorder traversal of its nodes' values in an array

Constraints:
- Return 0 when the tree is empty
*/

// ---- Solution ----
const dfs = function (node, values) {
  if (node.left) {
    dfs(node.left, values);
  }

  values.push(node.val);

  if (node.right) {
    dfs(node.right, values);
  }

  return values;
};

const inorderTraversal = function (root) {
  if (!root) return [];

  return dfs(root, []);
};

// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(n)
*/
