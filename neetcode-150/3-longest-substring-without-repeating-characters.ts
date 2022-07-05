// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

function lengthOfLongestSubstring(s: string): number {
    if (!s) {
        return 0
    }

    let i = 0
    let j = 0
    let len = s.length
    let set = new Set()
    let longest = 0

    while (i < len && j < len) {
        const nextChar = s[j]
        if (!set.has(nextChar)) {
            set.add(nextChar)
            j++
            longest = Math.max(longest, set.size)
        } else {
            while (i <= j) {
                const curI = s[i]
                set.delete(curI)
                i++
                if (curI === nextChar) {
                    break
                }
            }
        }
    }

    return longest
}
