// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

// Example 1:

// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.

// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0

// Constraints:

//     m == grid.length
//     n == grid[i].length
//     1 <= m, n <= 50
//     grid[i][j] is either 0 or 1.

function maxAreaOfIsland(grid: number[][]): number {
    if (!grid || !grid.length) {
        return 0
    }

    let maxResult = { val: 0 }
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const curResult = dfs(row, col, grid, { val: 0 })
            if (curResult.val > maxResult.val) {
                maxResult = curResult
            }
        }
    }

    return maxResult.val

    function dfs(row: number, col: number, grid: number[][], sum: { val: number }): { val: number } {
        const val = grid[row][col]
        if (val === 0) {
            return sum
        }
        if (val === 1) {
            sum.val++
            // mark as visited
            grid[row][col] = 0
        }

        if (row - 1 >= 0) {
            dfs(row - 1, col, grid, sum)
        }
        if (row + 1 < grid.length) {
            dfs(row + 1, col, grid, sum)
        }

        if (col - 1 >= 0) {
            dfs(row, col - 1, grid, sum)
        }
        if (col + 1 < grid[0].length) {
            dfs(row, col + 1, grid, sum)
        }

        return sum
    }
}
