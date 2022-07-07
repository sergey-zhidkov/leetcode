// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

function isValid(s: string): boolean {
    if (!s) {
        return true
    }

    if (s.length === 1) {
        return false
    }

    const stack: string[] = []
    for (const bracket of s) {
        if (isOpened(bracket)) {
            stack.push(bracket)
        } else {
            if (stack.length === 0) {
                return false
            }

            const matching = stack.pop()
            if (!isMatching(matching, bracket)) {
                return false
            }
        }
    }

    return stack.length === 0

    function isMatching(open: string | undefined, close: string) {
        return (open === '(' && close === ')') || (open === '[' && close === ']') || (open === '{' && close === '}')
    }

    function isOpened(bracket: string): boolean {
        return bracket === '(' || bracket === '[' || bracket === '{'
    }
}
