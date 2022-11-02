/* 
N-ary Tree Preorder Traversal (https://leetcode.com/problems/n-ary-tree-preorder-traversal/)
- Give the root of an n-ary tree, return the preorder traversal of its nodes' values in an array
*/
/**
 * // Definition for a Node.
 * // children is an array
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

// ---- Solution ----
const preorder = (node, ans = []) => {
  if (!node) return ans;

  ans.push(node.val);

  for (let child of node.children) {
    preorder(child, ans);
  }
  return ans;
};

// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(n)
*/
