// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]

// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]

function dailyTemperatures(temperatures: number[]): number[] {
    if (!temperatures?.length) {
        return []
    }

    if (temperatures.length === 1) {
        return [0]
    }

    const monotonicQueue: { index: number; value: number }[] = []
    const result: number[] = temperatures.reduceRight((acc, cur: number, index: number) => {
        pushToMQ(cur, index)
        acc[index] = (monotonicQueue[1]?.index ?? index) - index
        return acc
    }, [] as number[])

    return result

    function pushToMQ(value: number, index: number): void {
        while (monotonicQueue.length !== 0 && monotonicQueue[0].value <= value) {
            monotonicQueue.shift()
        }
        monotonicQueue.unshift({ index, value })
    }
}
