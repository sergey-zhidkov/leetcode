// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

// Example 1:

// Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

// Example 2:

// Input: heights = [[2,1],[1,2]]
// Output: [[0,0],[0,1],[1,0],[1,1]]

// Constraints:

//     m == heights.length
//     n == heights[r].length
//     1 <= m, n <= 200
//     0 <= heights[r][c] <= 105

function pacificAtlantic(heights: number[][]): number[][] {
    if (!heights?.length) {
        return []
    }

    const result: number[][] = []
    for (let row = 0; row < heights.length; row++) {
        for (let col = 0; col < heights[0].length; col++) {
            let localResult = { topLeft: false, bottomRight: false }
            dfsIsWaterFlow(row, col, heights, heights[row][col], localResult)
            if (localResult.bottomRight && localResult.topLeft) {
                result.push([row, col])
            }
        }
    }

    return result

    function dfsIsWaterFlow(
        row: number,
        col: number,
        heights: number[][],
        prevHeigh: number,
        res: { topLeft: boolean; bottomRight: boolean },
    ) {
        // this is a pacific ocean
        if (row < 0 || col < 0) {
            res.topLeft = true
            return
        }

        // this is atlantic ocean
        if (row >= heights.length || col >= heights[0].length) {
            res.bottomRight = true
            return
        }

        if (res.topLeft && res.bottomRight) {
            return
        }

        const curHeight = heights[row][col]
        // water can't flow here
        if (curHeight > prevHeigh) {
            return
        }

        // we have been here already
        if (curHeight === -1) {
            return
        }

        heights[row][col] = -1

        dfsIsWaterFlow(row - 1, col, heights, curHeight, res)
        dfsIsWaterFlow(row + 1, col, heights, curHeight, res)
        dfsIsWaterFlow(row, col - 1, heights, curHeight, res)
        dfsIsWaterFlow(row, col + 1, heights, curHeight, res)

        // recover the value
        heights[row][col] = curHeight
    }
}
