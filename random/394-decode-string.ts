// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

function decodeString(s: string): string {
    if (!s || s.length < 4) {
        return s
    }

    let result: string[] = []
    let i = 0
    while (i < s.length) {
        const char = s[i]

        if (isCharacter(char)) {
            result.push(char)
            i++
            continue
        }

        if (isDigit(char)) {
            const digitStart = i
            while (isDigit(s[i])) {
                i++
            }
            const numberAsString = s.substring(digitStart, i)
            const repeat = parseInt(numberAsString, 10)

            if (s[i] !== '[') {
                console.error('this should not happen')
            }
            // skip the "["
            i++

            const substrStart = i
            let substrEnd
            let sawOpenBracketTimes = 0
            while (true) {
                const sChar = s[i]
                if (sChar === '[') {
                    sawOpenBracketTimes++
                    i++
                    continue
                }

                if (sChar === ']') {
                    if (sawOpenBracketTimes === 0) {
                        substrEnd = i
                        i++
                        break
                    } else {
                        sawOpenBracketTimes--
                        i++
                        continue
                    }
                }
                i++
            }

            const extracted = decodeString(s.substring(substrStart, substrEnd))
            for (let r = 0; r < repeat; r++) {
                result.push(extracted)
            }
        }
    }

    return result.join('')
}

function isDigit(character: string): boolean {
    // const isDigit = [true, true, true, true, true, true, true, true, true, true]
    // return !!isDigit[character]
    return character >= '0' && character <= '9'
}

function isCharacter(character: string): boolean {
    // const isDigit = [true, true, true, true, true, true, true, true, true, true]
    // return !!isDigit[character]
    return (character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')
}
