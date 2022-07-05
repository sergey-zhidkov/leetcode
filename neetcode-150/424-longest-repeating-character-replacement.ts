// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

function characterReplacement(s: string, k: number): number {
    if (!s.length) {
        return 0
    }

    let leftPointer = 0
    let rightPointer = 0
    let longest = 0
    let mostCommonCharCount = 0
    const mapCharToCount = new Map<string, number>()
    while (rightPointer < s.length) {
        const nextChar = s[rightPointer]
        const howManyTimesSeenNextChar = mapCharToCount.get(nextChar) ?? 0
        mapCharToCount.set(nextChar, howManyTimesSeenNextChar + 1)
        mostCommonCharCount = Math.max(mostCommonCharCount, howManyTimesSeenNextChar + 1)
        const needToReplaceCount = rightPointer - leftPointer + 1 - mostCommonCharCount

        if (needToReplaceCount > k) {
            const howManyTimesSeenLeftChar = mapCharToCount.get(s[leftPointer]) as number
            mapCharToCount.set(s[leftPointer], howManyTimesSeenLeftChar - 1)
            leftPointer++
            mostCommonCharCount = Math.max(...mapCharToCount.values())
        }
        longest = Math.max(longest, rightPointer - leftPointer + 1)
        rightPointer++
    }

    return Math.max(longest, rightPointer - leftPointer)
}
