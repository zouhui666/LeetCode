/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  const queue = [root];
  const equal = root.val;
  while(queue.length) {
      const current = queue.shift();
      if(!current) continue;
      if(current.val !== equal) return false;
      queue.push(current.left, current.right);
  }
    return true;
};