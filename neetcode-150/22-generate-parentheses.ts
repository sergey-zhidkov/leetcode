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
    if (n <= 0) {
        return []
    }

    const dfs = (open: number, close: number, state: string): void => {
        if (open === 0 && close === 0) {
            // console.log("exit >>>", state)
            result.push(state)
            return
        }
        if (open > 0) {
            // state += '('
            // open--
            // console.log("enter open >>>", state, open, close)
            dfs(open - 1, close, state + '(')
        }

        if (close > 0 && close > open) {
            // state += ')'
            // close--
            // console.log("enter close >>>", state, open, close)
            dfs(open, close - 1, state + ')')
        }
    }

    const result: string[] = []
    dfs(n, n, '')

    return result
}
