// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

function trap(height: number[]): number {
    if (!height?.length || height.length <= 2) {
        return 0
    }

    let leftPointer = 0
    let rightPointer = height.length - 1
    let curVolume = 0
    let maxLeftHeight = 0
    let maxRightHeight = 0

    while (leftPointer < rightPointer) {
        const leftHeight = height[leftPointer]
        if (leftHeight > maxLeftHeight) {
            maxLeftHeight = leftHeight
        }
        const rightHight = height[rightPointer]
        if (rightHight > maxRightHeight) {
            maxRightHeight = rightHight
        }

        if (leftHeight < rightHight) {
            curVolume += Math.min(maxLeftHeight, maxRightHeight) - leftHeight
            leftPointer++
        } else {
            curVolume += Math.min(maxLeftHeight, maxRightHeight) - rightHight
            rightPointer--
        }
    }

    return curVolume
}
