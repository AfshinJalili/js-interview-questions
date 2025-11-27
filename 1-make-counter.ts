/**
 * Javascript - Day 1
 * Make Counter
 *
 * Implements a function `makeCounter` that accepts an optional integer value and returns a function.
 * When the returned function is called initially, it returns the initial value if provided, otherwise 0.
 * The returned function can be called repeatedly to return 1 more than the return value of the previous invocation.
 *
 * @example
 * const counter = makeCounter();
 * counter(); // 0
 * counter(); // 1
 * counter(); // 2
 *
 * @example
 * // With a custom initial value:
 * const counter = makeCounter(5);
 * counter(); // 5
 * counter(); // 6
 * counter(); // 7
 * 
 * 
 * @see [JavaScript Closures - javascript.info](https://javascript.info/closure)
 * @see [MDN: JavaScript Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
 * @see [MDN: Functions - Lexical Scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#lexical_scope)
 */
function makeCounter(initialValue: number = 0): () => number {
    let current = initialValue;
    return function () {
        current += 1;
        return current;
    };
}
