// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:

// Input: n = 1
// Output: ["()"]

// Constraints:

//     1 <= n <= 8

function generateParenthesis(n: number): string[] {
    const res: string[] = []

    const go = (l, r, s) => {
        if (l > r) return

        if (l === 0 && r === 0) {
            res.push(s)
            return
        }

        if (l > 0) go(l - 1, r, s + '(')
        if (r > 0) go(l, r - 1, s + ')')
    }

    go(n, n, '')
    return res
}
