// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// Constraints:

//     m == grid.length
//     n == grid[i].length
//     1 <= m, n <= 300
//     grid[i][j] is '0' or '1'.

function numIslands(grid: string[][]): number {
    if (!grid || !grid.length) {
        return 0
    }

    let result = 0
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '1') {
                result++
            }
            dfs(row, col, grid)
        }
    }

    return result

    function dfs(row: number, col: number, grid: string[][]) {
        const val = grid[row][col]
        // if visited
        if (val === 'v' || val === '0') {
            return
        }

        // mark as visited
        grid[row][col] = 'v'
        if (row - 1 >= 0) {
            dfs(row - 1, col, grid)
        }
        if (row + 1 < grid.length) {
            dfs(row + 1, col, grid)
        }
        if (col - 1 >= 0) {
            dfs(row, col - 1, grid)
        }
        if (col + 1 < grid[0].length) {
            dfs(row, col + 1, grid)
        }
    }
}
