// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

function maxArea(height: number[]): number {
    if (!height?.length) {
        return 0
    }

    let bestMaxArea = 0
    let leftPointer = 0
    let rightPointer = height.length - 1

    while (leftPointer < rightPointer) {
        const curBextMaxArea = Math.min(height[leftPointer], height[rightPointer]) * (rightPointer - leftPointer)
        if (curBextMaxArea > bestMaxArea) {
            bestMaxArea = curBextMaxArea
        }
        if (height[leftPointer] < height[rightPointer]) {
            leftPointer++
        } else {
            rightPointer--
        }
    }

    return bestMaxArea
}
