// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:

//     1 <= intervals.length <= 104
//     intervals[i].length == 2
//     0 <= starti <= endi <= 104

function merge(intervals: number[][]): number[][] {
    if (!intervals.length || intervals.length === 1) {
        return intervals
    }

    intervals.sort((a, b) => a[0] - b[0])

    const result: number[][] = []
    let prev = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        const cur = intervals[i]
        if (isOverlap(prev, cur)) {
            prev = mergeIntervals(prev, cur)
        } else {
            result.push(prev)
            prev = cur
        }
    }
    result.push(prev)

    return result
}

function isOverlap(int1: number[], int2: number[]) {
    if (int1[1] < int2[0] || int2[1] < int1[0]) {
        return false
    }
    return true
}

function mergeIntervals(int1: number[], int2: number[]): number[] {
    return [Math.min(int1[0], int2[0]), Math.max(int1[1], int2[1])]
}
