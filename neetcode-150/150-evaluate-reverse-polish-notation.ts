// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

// Note that division between two integers should truncate toward zero.

// It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

// Example 1:

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Example 2:

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

// Example 3:

// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

function evalRPN(tokens: string[]): number {
    if (!tokens?.length) {
        return 0
    }

    const stack: number[] = []

    for (const singleToken of tokens) {
        if (singleToken === '+' || singleToken === '-' || singleToken === '*' || singleToken === '/') {
            const result = calcResult(stack, singleToken)
            stack.push(result as number)
        } else {
            stack.push(parseInt(singleToken, 10))
        }
    }

    return stack[0]

    function calcResult(stack: number[], token: string): number | undefined {
        switch (token) {
            case '+': {
                const op1 = stack.pop() as number
                const op2 = stack.pop() as number
                return op1 + op2
            }
            case '-': {
                const op2 = stack.pop() as number
                const op1 = stack.pop() as number
                return op1 - op2
            }
            case '*': {
                const op1 = stack.pop() as number
                const op2 = stack.pop() as number
                return op1 * op2
            }
            case '/': {
                const op2 = stack.pop() as number
                const op1 = stack.pop() as number
                return Math.trunc(op1 / op2)
            }
        }
    }
}
