/**
 * Javascript - Day 10
 * Type Utilities
 *
 * JavaScript is a dynamically typed language, which means the types of variable
 * types can be changed during runtime. Many interview questions involve recursion
 * of objects that can hold values of different types and how to handle each value
 * type differs according to the type (e.g. different code is needed to iterate
 * over an array vs an object). Knowledge of handling the JavaScript types is
 * crucial to solving questions like Deep Clone and Deep Equal.
 *
 * In Type Utilities, we have implemented utility functions to determine the types
 * of primitive values. In this question, we will implement the following utility
 * functions to determine the types of non-primitive values.
 *
 * - isArray(value): Return true if value is an array, false otherwise.
 * - isFunction(value): Return true if value is a function, false otherwise.
 * - isObject(value): Return true if value is an object (e.g. arrays, functions,
 *   objects, etc, but not including null and undefined), false otherwise.
 * - isPlainObject(value): Return true if value is a plain object, false otherwise
 *   (for arrays, functions, etc). A plain object, or what is commonly known as a
 *   Plain Old JavaScript Object (POJO) is any object whose prototype is
 *   Object.prototype or an object created via Object.create(null).
 *
 * @example
 * isArray([]); // true
 * isFunction(() => {}); // true
 * isObject({}); // true
 * isPlainObject({}); // true
 * isPlainObject(Object.create(null)); // true
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString} MDN: Object.toString
 * @source @danceswithcode @alithecodeguy
 * @tags #js #javascript #interview87
 */

// ============== SOLUTION ==============

function getTag(value: unknown): string {
    return Object.prototype.toString.call(value).slice(8, -1)
}

function isArray(value: unknown): boolean {
    return getTag(value) === 'Array'
}

function isFunction(value: unknown): boolean {
    return getTag(value) === 'Function'
}

function isObject(value: unknown): boolean {
    return value != null && (typeof value === 'object' || typeof value === 'function')
}

function isPlainObject(value: unknown): boolean {
    if (value == null) return false
    const proto = Object.getPrototypeOf(value)
    return proto === null || proto === Object.prototype
}

// ============== TEST ==============

console.log("===== getTag =====")
console.log(getTag(123), "→ Number")
console.log(getTag("hi"), "→ String")
console.log(getTag(true), "→ Boolean")
console.log(getTag(null), "→ Null")
console.log(getTag(undefined), "→ Undefined")
console.log(getTag(Symbol()), "→ Symbol")
console.log(getTag(BigInt(10)), "→ BigInt")
console.log(getTag([]), "→ Array")
console.log(getTag({}), "→ Object")
console.log(getTag(() => {}), "→ Function")
console.log(getTag(new Date()), "→ Date")
console.log(getTag(/abc/), "→ RegExp")
console.log(getTag(new Map()), "→ Map")

console.log("\n===== isArray =====")
console.log(isArray([]), "→ true")
console.log(isArray([1, 2, 3]), "→ true")
console.log(isArray({}), "→ false")
console.log(isArray("hello"), "→ false")
console.log(isArray(null), "→ false")
console.log(isArray(undefined), "→ false")
console.log(isArray(() => {}), "→ false")
console.log(isArray(new Array(5)), "→ true")

console.log("\n===== isFunction =====")
console.log(isFunction(() => {}), "→ true")
console.log(isFunction(function () {}), "→ true")
console.log(isFunction(class A {}), "→ true")
console.log(isFunction(async function() {}), "→ true")
console.log(isFunction({}), "→ false")
console.log(isFunction([]), "→ false")
console.log(isFunction(null), "→ false")
console.log(isFunction("hello"), "→ false")

console.log("\n===== isObject =====")
console.log(isObject({}), "→ true")
console.log(isObject([]), "→ true")
console.log(isObject(() => {}), "→ true")
console.log(isObject(new Date()), "→ true")
console.log(isObject(new Map()), "→ true")
console.log(isObject(null), "→ false")
console.log(isObject(undefined), "→ false")
console.log(isObject("hi"), "→ false")
console.log(isObject(123), "→ false")
console.log(isObject(true), "→ false")
console.log(isObject(Symbol()), "→ false")

console.log("\n===== isPlainObject =====")
console.log(isPlainObject({}), "→ true")
console.log(isPlainObject({ a: 1 }), "→ true")
console.log(isPlainObject(Object.create(null)), "→ true")
console.log(isPlainObject([]), "→ false")
console.log(isPlainObject(() => {}), "→ false")
console.log(isPlainObject(new Date()), "→ false")
console.log(isPlainObject(new Map()), "→ false")
console.log(isPlainObject(null), "→ false")
console.log(isPlainObject("string"), "→ false")
console.log(isPlainObject(10), "→ false")
console.log(isPlainObject(class A {}), "→ false")

class A {}
console.log(isPlainObject(new A()), "→ false")
