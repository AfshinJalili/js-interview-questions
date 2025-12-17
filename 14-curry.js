
/**
 * Javascript - Day 14
 * Curry
 *
 * Currying converts a function taking multiple arguments into a chain of
 * functions that each take a single argument until enough arguments are
 * provided to call the original function.
 *
 * @param fn - Function to curry
 * @returns Curried version that keeps collecting args until fn.length is met
 *
 * @example
 * function add(a, b) { return a + b }
 * const curriedAdd = curry(add)
 * curriedAdd(3)(4) // 7
 *
 * @example
 * function multiplyThreeNumbers(a, b, c) { return a * b * c }
 * const curriedMultiplyThreeNumbers = curry(multiplyThreeNumbers)
 * curriedMultiplyThreeNumbers(4)(5)(6) // 120
 *
 * @source @danceswithcode @alithecodeguy
 * @tags #js #javascript #interview87
 */

// ============== SOLUTION ==============

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args)
        }
        return (...moreArgs) => curried(...args, ...moreArgs)
    }
}

// ============== TEST ==============

function add(a, b) {
    return a + b
}

function multiplyThreeNumbers(a, b, c) {
    return a * b * c
}

const curriedAdd = curry(add)
console.log(curriedAdd(3)(4)) // 7
const alreadyAddedThree = curriedAdd(3)
console.log(alreadyAddedThree(4)) // 7

const curriedMultiplyThreeNumbers = curry(multiplyThreeNumbers)
console.log(curriedMultiplyThreeNumbers(4)(5)(6)) // 120
const containsFour = curriedMultiplyThreeNumbers(4)
const containsFourMulFive = containsFour(5)
console.log(containsFourMulFive(6)) // 120
