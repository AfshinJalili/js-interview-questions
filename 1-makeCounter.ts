/**
 * Javascript - Day 1
 * Make Counter
 *
 * Implement a function `makeCounter` that accepts an optional integer value
 * and returns a function. When the returned function is called initially,
 * it returns the initial value if provided, otherwise 0. The returned function
 * can be called repeatedly to return 1 more than the return value of the
 * previous invocation.
 *
 * @example
 * const counter = makeCounter();
 * counter(); // 0
 * counter(); // 1
 * counter(); // 2
 *
 * @example
 * const counter = makeCounter(5);
 * counter(); // 5
 * counter(); // 6
 * counter(); // 7
 *
 * @see {@link https://javascript.info/closure} JavaScript Closures
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures} MDN: Closures
 * @source @danceswithcode @alithecodeguy
 * @tags #js #javascript #interview
 */

// ============== SOLUTION ==============

function makeCounter(initialValue: number = 0): () => number {
    let current = initialValue - 1
    return function () {
        current += 1
        return current
    }
}

// ============== TEST ==============

const counter = makeCounter()
console.log(counter()) // 0
console.log(counter()) // 1
console.log(counter()) // 2

const counter2 = makeCounter(5)
console.log(counter2()) // 5
console.log(counter2()) // 6
