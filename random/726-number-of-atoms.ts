// Given a string formula representing a chemical formula, return the count of each atom.

// The atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.

// One or more digits representing that element's count may follow if the count is greater than 1. If the count is 1, no digits will follow.

//     For example, "H2O" and "H2O2" are possible, but "H1O2" is impossible.

// Two formulas are concatenated together to produce another formula.

//     For example, "H2O2He3Mg4" is also a formula.

// A formula placed in parentheses, and a count (optionally added) is also a formula.

//     For example, "(H2O2)" and "(H2O2)3" are formulas.

// Return the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on.

// The test cases are generated so that all the values in the output fit in a 32-bit integer.

// Example 1:

// Input: formula = "H2O"
// Output: "H2O"
// Explanation: The count of elements are {'H': 2, 'O': 1}.

// Example 2:

// Input: formula = "Mg(OH)2"
// Output: "H2MgO2"
// Explanation: The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.

// Example 3:

// Input: formula = "K4(ON(SO3)2)2"
// Output: "K4N2O14S4"
// Explanation: The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.

function countOfAtoms(formula: string): string {
    if (!formula) {
        return ''
    }

    const stack: any[] = []
    let curMap = new Map()
    let i = 0
    while (i < formula.length) {
        // start new stack
        if (formula[i] === '(') {
            // save prev map
            stack.push(curMap)
            curMap = new Map()
            i++
        }
        // get the value from stack and merge from the prev stack value
        else if (formula[i] === ')') {
            i++
            // read digits after it
            const [repeatTimes, newI] = readNextDigit(formula, i)
            i = newI
            // multiply all elements in curMap
            for (const element of curMap.keys()) {
                const times = curMap.get(element)
                curMap.set(element, times * repeatTimes)
            }

            // merge curMap with prev map in the stack
            const lastMap = stack.pop()
            for (const el of curMap.keys()) {
                const lastMapElTimes = lastMap.get(el) ?? 0
                lastMap.set(el, curMap.get(el) + lastMapElTimes)
            }
            curMap = lastMap
        }
        // parse current level values
        else {
            const element = readNextElement(formula, i)
            i += element.length
            const [repeatTimes, newI] = readNextDigit(formula, i)
            i = newI
            const currentlyInMap = curMap.get(element) ?? 0
            curMap.set(element, currentlyInMap + repeatTimes)
        }
    }

    const elements = Array.from(curMap.keys())
    elements.sort()

    let result = ''
    for (const singleElement of elements) {
        const times = curMap.get(singleElement)
        result += singleElement + (times === 1 ? '' : times)
    }

    return result
}

function readNextElement(formula: string, i: number) {
    // UpperCase
    let element = formula[i++]
    while (isLowerCase(formula[i])) {
        element += formula[i]
        i++
    }
    return element
}

function readNextDigit(formula: string, i: number) {
    // UpperCase
    let result = ''
    while (isDigit(formula[i])) {
        result += formula[i]
        i++
    }
    return [result ? parseInt(result) : 1, i]
}

function isLowerCase(character: string) {
    return character >= 'a' && character <= 'z'
}

function isDigit(character: string) {
    return character >= '0' && character <= '9'
}
