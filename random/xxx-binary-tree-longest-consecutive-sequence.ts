// Given a binary tree, find the length of the longest consecutive sequence path.

// The path refers to any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The longest consecutive path need to be from parent to child (cannot be the reverse).

// Contact me on wechat to get Amazon、Google requent Interview questions . (wechat id : jiuzhang0607)
// Example

// Example 1:

// Input:

//    1

//     \

//      3

//     / \

//    2   4

//         \

//          5

// Output:3

// Explanation:

// Longest consecutive sequence path is 3-4-5, so return 3.

// Example 2:

// Input:

//    2

//     \

//      3

//     /

//    2

//   /

//  1

// Output:2

// Explanation:

// Longest consecutive sequence path is 2-3,not 3-2-1, so return 2.

// import { TreeNode } from '/opt/node/lib/lintcode/index.js'

/**
 * Definition of TreeNode:
 * class TreeNode {
 *   constructor(val, left=null, right=null) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 *   }
 * }
 */

// https://www.lintcode.com/problem/595/
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

export class Solution {
    /**
     * @param root: the root of binary tree
     * @return: the length of the longest consecutive sequence path
     */
    longestConsecutive(root: TreeNode): number {
        if (!root) {
            return 0
        }

        // write your code here

        const left = this.dfs(root.left, root.val, 1, 1)
        const right = this.dfs(root.right, root.val, 1, 1)

        return Math.max(left, right)
    }

    dfs(node: TreeNode | null, parentValue: number, curMax: number, max: number): number {
        if (!node) {
            return Math.max(curMax, max)
        }

        if (node.val - parentValue === 1) {
            curMax++
        } else {
            // start over
            if (curMax > max) {
                max = curMax
            }
            curMax = 1
        }

        const left = this.dfs(node.left, node.val, curMax, max)
        const right = this.dfs(node.right, node.val, curMax, max)
        return Math.max(left, right, max)
    }
}
