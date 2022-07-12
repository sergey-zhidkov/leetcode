// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

// Example 1:

// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// Example 2:

// Input: root = [1,2]
// Output: 1

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}

function isBalanced(root: TreeNode | null): boolean {
    if (!root) {
        return true
    }

    const [leftPath, isLeftBalanced] = dfs(root.left)
    const [rightPath, isRightBalanced] = dfs(root.right)

    return isLeftBalanced && isRightBalanced && Math.abs(leftPath - rightPath) <= 1

    function dfs(node: TreeNode | null) {
        if (!node) {
            return [0, true]
        }

        const [leftPath, isLeftBalanced] = dfs(node.left)
        const [rightPath, isRightBalanced] = dfs(node.right)

        if (!isLeftBalanced || !isRightBalanced) {
            return [0, false]
        }

        const diff = Math.abs(leftPath - rightPath)

        return [Math.max(leftPath, rightPath) + 1, diff <= 1]
    }
}
