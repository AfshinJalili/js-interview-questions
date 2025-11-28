/**
 * Javascript - Day 3
 * Function.prototype.call
 *
 * Implement your own Function.prototype.call without calling the native call
 * method. To avoid overwriting the actual Function.prototype.call, implement
 * the function as Function.prototype.myCall.
 *
 * @example
 * function multiplyAge(multiplier = 1) {
 *   return this.age * multiplier;
 * }
 * const mary = { age: 21 };
 * const john = { age: 42 };
 *
 * multiplyAge.myCall(mary); // 21
 * multiplyAge.myCall(john, 2); // 84
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call} MDN: Function.call
 * @source @danceswithcode @alithecodeguy
 * @tags #js #javascript #interview87
 */

// ============== SOLUTION ==============

declare global {
    interface Function {
        myCall(thisArg: any, ...args: any[]): any
    }
}
export {}

Function.prototype.myCall = function (thisArg: any, ...args: any[]) {
    if (thisArg == null) {
        thisArg = globalThis
    } else if (typeof thisArg !== 'object' && typeof thisArg !== 'function') {
        thisArg = Object(thisArg)
    }

    const key = Symbol()
    thisArg[key] = this
    const result = thisArg[key](...args)
    delete thisArg[key]

    return result
}

// ============== TEST ==============

function multiplyAge(this: { age: number }, multiplier = 1) {
    return this.age * multiplier
}

const mary = { age: 21 }
const john = { age: 42 }

console.log(multiplyAge.myCall(mary)) // 21
console.log(multiplyAge.myCall(john, 2)) // 84
