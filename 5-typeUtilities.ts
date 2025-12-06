/**
 * Javascript - Day 5
 * Type Utilities
 *
 * Implement utility functions to determine the types of primitive values.
 * JavaScript is dynamically typed, so handling different types is crucial
 * for solving questions like Deep Clone and Deep Equal.
 *
 * - isBoolean(value): Return true if value is a boolean
 * - isNumber(value): Return true if value is a number (NaN is a number)
 * - isNull(value): Return true if value is null
 * - isString(value): Return true if value is a string
 * - isSymbol(value): Return true if value is a Symbol
 * - isUndefined(value): Return true if value is undefined
 *
 * @example
 * isBoolean(true); // true
 * isNumber(NaN); // true
 * isNull(null); // true
 * isString(''); // true
 * isSymbol(Symbol()); // true
 * isUndefined(undefined); // true
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof} MDN: typeof
 * @source @danceswithcode @alithecodeguy
 * @tags #js #javascript #interview
 */

// ============== SOLUTION ==============

function isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean'
}

function isNumber(value: unknown): value is number {
    return typeof value === 'number'
}

function isNull(value: unknown): value is null {
    return value === null
}

function isString(value: unknown): value is string {
    return typeof value === 'string'
}

function isSymbol(value: unknown): value is symbol {
    return typeof value === 'symbol'
}

function isUndefined(value: unknown): value is undefined {
    return typeof value === 'undefined'
}

// ============== TEST ==============

console.log(isBoolean(true)) // true
console.log(isBoolean(0)) // false
console.log(isNumber(42)) // true
console.log(isNumber(NaN)) // true
console.log(isNull(null)) // true
console.log(isNull(undefined)) // false
console.log(isString('hello')) // true
console.log(isSymbol(Symbol())) // true
console.log(isUndefined(undefined)) // true
