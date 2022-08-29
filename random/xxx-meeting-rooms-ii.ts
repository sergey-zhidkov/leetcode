// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.)

// (0,8),(8,10) is not conflict at 8
// Example

// Example1

// Input: intervals = [(0,30),(5,10),(15,20)]

// Output: 2

// Explanation:

// We need two meeting rooms

// room1: (0,30)

// room2: (5,10),(15,20)

// Example2

// Input: intervals = [(2,7)]

// Output: 1

// Explanation:

// Only need one meeting room

export class Solution {
    /**
     * @param intervals: an array of meeting time intervals
     * @return: the minimum number of conference rooms required
     */
    minMeetingRooms(intervals: Interval[]): number {
        if (!intervals?.length) {
            return 0
        }

        const startTime = []
        const endTime = []
        for (const singleInterval of intervals) {
            startTime.push(singleInterval.start)
            endTime.push(singleInterval.end)
        }

        startTime.sort((a, b) => a - b)
        endTime.sort((a, b) => a - b)

        let counter = 0
        let maxRooms = 0
        let startPointer = 0
        let endPointer = 0
        while (true) {
            if (startPointer >= startTime.length) {
                break
            }
            const start = startTime[startPointer]
            const end = endTime[endPointer]

            if (start < end) {
                counter++
                startPointer++
            } else {
                counter--
                endPointer++
            }
            maxRooms = Math.max(maxRooms, counter)
        }

        return maxRooms
    }
}
