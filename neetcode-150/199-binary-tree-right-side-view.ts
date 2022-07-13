// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example 1:

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]

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

function rightSideView(root: TreeNode | null): number[] {
    if (!root) {
        return []
    }

    const result: number[] = []
    let queue = [root]
    while (queue.length) {
        result.push(queue[queue.length - 1].val)

        const nextLevel: TreeNode[] = []
        for (const singleNode of queue) {
            if (singleNode.left) {
                nextLevel.push(singleNode.left)
            }
            if (singleNode.right) {
                nextLevel.push(singleNode.right)
            }
        }
        queue = nextLevel
    }

    return result
}
