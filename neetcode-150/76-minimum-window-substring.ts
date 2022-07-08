// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

function minWindow(s: string, t: string): string {
    if (!t || t.length > s.length) {
        return ''
    }
    if (t === s) {
        return s
    }

    const mapCharToCount = new Map()
    for (const char of t) {
        const count = mapCharToCount.get(char) ?? 0
        mapCharToCount.set(char, count + 1)
    }

    let leftPointer = 0
    let rightPointer = 0
    let minWindowSubstring = ''
    let minWindowSubstringLength = (s + t).length
    const curWindowMap = new Map()
    const curCharToCountMap = new Map(mapCharToCount)
    let totalTCount = t.length

    while (true) {
        while (totalTCount > 0 && rightPointer < s.length) {
            const nextChar = s[rightPointer]
            // current window map
            const curWindowMapCount = curWindowMap.get(nextChar) ?? 0
            curWindowMap.set(nextChar, curWindowMapCount + 1)
            // current t map
            const curCharToCountMapCount = curCharToCountMap.get(nextChar)
            if (curCharToCountMapCount !== undefined) {
                const nextCount = curCharToCountMapCount - 1
                curCharToCountMap.set(nextChar, nextCount < 0 ? 0 : nextCount)
                nextCount >= 0 && totalTCount--
            }
            rightPointer++
        }

        while (totalTCount === 0 && leftPointer <= rightPointer) {
            // first min substring window
            if (rightPointer - leftPointer < minWindowSubstringLength) {
                minWindowSubstring = s.substring(leftPointer, rightPointer)
                minWindowSubstringLength = minWindowSubstring.length
            }

            const charToDelete = s[leftPointer]
            const howManyLeft = curWindowMap.get(charToDelete) - 1
            curWindowMap.set(charToDelete, howManyLeft)

            if (mapCharToCount.has(charToDelete)) {
                const howManySupposeToBe = mapCharToCount.get(charToDelete)
                if (howManySupposeToBe > howManyLeft) {
                    curCharToCountMap.set(charToDelete, 1)
                    totalTCount = 1
                }
            }
            leftPointer++
        }

        if (rightPointer === s.length && totalTCount !== 0) {
            break
        }
    }

    return minWindowSubstring
}
