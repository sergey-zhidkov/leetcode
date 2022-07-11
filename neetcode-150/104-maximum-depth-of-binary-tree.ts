// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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

function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0
    }

    const depth = bfs([root], 0)
    return depth

    function bfs(nodes: TreeNode[], curDepth: number): number {
        if (!nodes.length) {
            return curDepth
        }

        const nextLevel: TreeNode[] = []
        for (const singleNode of nodes) {
            if (singleNode.left) {
                nextLevel.push(singleNode.left)
            }
            if (singleNode.right) {
                nextLevel.push(singleNode.right)
            }
        }

        curDepth++
        return bfs(nextLevel, curDepth)
    }
}
