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

function diameterOfBinaryTree(root: TreeNode | null): number {
    if (!root) {
        return 0
    }

    let maxDiameter = 0
    dfs(root)

    return maxDiameter

    function dfs(node: TreeNode | null): number {
        if (!node) {
            // max of left and right and cur max diameter
            return 0
        }

        const leftPath = dfs(node.left)
        const rightPath = dfs(node.right)
        maxDiameter = Math.max(maxDiameter, leftPath + rightPath)

        return 1 + Math.max(leftPath, rightPath)
    }
}
