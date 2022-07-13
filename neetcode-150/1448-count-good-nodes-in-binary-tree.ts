// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

// Example 1:

// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.

// Example 2:

// Input: root = [3,3,null,4,2]
// Output: 3
// Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.

// Example 3:

// Input: root = [1]
// Output: 1
// Explanation: Root is considered as good.

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

function goodNodes(root: TreeNode | null): number {
    if (!root) {
        return 0
    }

    const goodCount = getGoodNodes(root, root.val)
    return goodCount

    function getGoodNodes(root: TreeNode | null, curMax: number): number {
        if (!root) {
            return 0
        }

        let add = 0
        if (curMax <= root.val) {
            add = 1
        }

        curMax = Math.max(curMax, root.val)
        const left = getGoodNodes(root.left, curMax)
        const right = getGoodNodes(root.right, curMax)

        return left + right + add
    }
}
