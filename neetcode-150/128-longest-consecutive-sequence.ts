// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Constraints:

//     0 <= nums.length <= 105
//     -109 <= nums[i] <= 109

// Can be solved with union find or Set as well
function longestConsecutive(nums: number[]): number {
    if (!nums?.length) {
        return 0
    }

    const numToVisitedMap = new Map<number, boolean>()
    for (const singleNum of nums) {
        numToVisitedMap.set(singleNum, false)
    }

    let currLongestConsecutive = 1
    for (const [singleNum, isVisited] of numToVisitedMap) {
        if (isVisited) {
            continue
        }
        numToVisitedMap.set(singleNum, true)
        const visited = visitNeighbours(singleNum, numToVisitedMap) + 1
        if (visited > currLongestConsecutive) {
            currLongestConsecutive = visited
        }
    }

    function visitNeighbours(singleNum: number, map: Map<number, boolean>): number {
        let visited = 0

        // traverse left
        let nextNum = singleNum - 1
        while (map.has(nextNum)) {
            map.set(nextNum, true)
            visited++
            nextNum--
        }

        // traverse right
        nextNum = singleNum + 1
        while (map.has(nextNum)) {
            map.set(nextNum, true)
            visited++
            nextNum++
        }

        return visited
    }

    return currLongestConsecutive
}
