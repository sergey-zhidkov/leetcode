// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:

// Input: root = [1]
// Output: [[1]]

// Example 3:

// Input: root = []
// Output: []

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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return []
    }

    const result: number[][] = []
    let queue: TreeNode[] = [root]
    while (queue.length) {
        const subResult: number[] = []

        const nextLevel: TreeNode[] = []
        for (const singleNode of queue) {
            subResult.push(singleNode.val)
            if (singleNode.left) {
                nextLevel.push(singleNode.left)
            }
            if (singleNode.right) {
                nextLevel.push(singleNode.right)
            }
        }

        result.push(subResult)
        queue = nextLevel
    }

    return result
}
