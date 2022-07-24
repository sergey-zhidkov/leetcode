// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// Example 1:

// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Notice that an 'O' should not be flipped if:
// - It is on the border, or
// - It is adjacent to an 'O' that should not be flipped.
// The bottom 'O' is on the border, so it is not flipped.
// The other three 'O' form a surrounded region, so they are flipped.

// Example 2:

// Input: board = [["X"]]
// Output: [["X"]]

// Constraints:

//     m == board.length
//     n == board[i].length
//     1 <= m, n <= 200
//     board[i][j] is 'X' or 'O'.

/**
  Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    if (!board?.length) {
        return
    }

    // DFS first and last row
    for (let col = 0; col < board[0].length; col++) {
        dfs(0, col, board)
        dfs(board.length - 1, col, board)
    }

    // DFS first and last column
    for (let row = 0; row < board.length; row++) {
        dfs(row, 0, board)
        dfs(row, board[0].length - 1, board)
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            const value = board[row][col]
            if (value === 'O') {
                // SWAP ALL 'O' to 'X'
                board[row][col] = 'X'
            } else if (value === 'TO') {
                // SWAP ALL 'TO' to 'O'
                board[row][col] = 'O'
            }
        }
    }
}

function dfs(row: number, col: number, board: string[][]): void {
    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) {
        return
    }

    const curPoint = board[row][col]
    // we have been here before or border
    if (curPoint !== 'O') {
        return
    }
    // Temporary O
    board[row][col] = 'TO'

    dfs(row - 1, col, board)
    dfs(row + 1, col, board)
    dfs(row, col - 1, board)
    dfs(row, col + 1, board)
}
