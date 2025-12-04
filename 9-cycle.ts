/**
 * Javascript - Day 9
 * Cycle
 *
 * Implement a function that takes one or more values and returns a function
 * that cycles through those values each time it is called.
 *
 * @example
 * const helloFn = cycle('hello');
 * helloFn(); // "hello"
 * helloFn(); // "hello"
 *
 * @example
 * const onOffFn = cycle('on', 'off');
 * onOffFn(); // "on"
 * onOffFn(); // "off"
 * onOffFn(); // "on"
 *
 * @source @danceswithcode @alithecodeguy
 * @tags #js #javascript #interview87
 */

// ============== SOLUTION ==============

function cycle<T>(...values: T[]): () => T {
    if (values.length === 0) {
        throw new Error('cycle requires at least one value')
    }
    let currentIndex = 0

    return function (): T {
        const currentValue = values[currentIndex]!
        currentIndex = (currentIndex + 1) % values.length
        return currentValue
    }
}

// ============== TEST ==============

const helloFn = cycle('hello')
console.log(helloFn()) // "hello"
console.log(helloFn()) // "hello"

const onOffFn = cycle('on', 'off')
console.log(onOffFn()) // "on"
console.log(onOffFn()) // "off"
console.log(onOffFn()) // "on"
