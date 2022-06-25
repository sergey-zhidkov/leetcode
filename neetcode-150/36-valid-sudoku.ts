// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

//     Each row must contain the digits 1-9 without repetition.
//     Each column must contain the digits 1-9 without repetition.
//     Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:

//     A Sudoku board (partially filled) could be valid but is not necessarily solvable.
//     Only the filled cells need to be validated according to the mentioned rules.

function isValidSudoku(board: string[][]): boolean {
    if (!board) {
        return false
    }

    // Can use hashMap to avoid of using arrays of sets
    const subBoxesSets = [
        [new Set(), new Set(), new Set()],
        [new Set(), new Set(), new Set()],
        [new Set(), new Set(), new Set()],
    ]
    const colSets = board[0].map((_) => new Set())

    for (let row = 0; row < board.length; row++) {
        const rowArray = board[row]
        const rowSet = new Set()
        for (let col = 0; col < board[0].length; col++) {
            const colChar = rowArray[col]
            if (colChar === '.') {
                continue
            }
            const subBoxesRow = Math.floor(row / 3)
            const subBoxesCol = Math.floor(col / 3)
            const subBoxSet = subBoxesSets[subBoxesRow][subBoxesCol]
            const colSet = colSets[col]
            // did check sub boxes
            if (subBoxSet.has(colChar)) {
                return false
            }
            if (rowSet.has(colChar)) {
                return false
            }
            if (colSet.has(colChar)) {
                return false
            }

            subBoxSet.add(colChar)
            rowSet.add(colChar)
            colSet.add(colChar)
        }
    }

    return true
}
