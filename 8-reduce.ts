/**
 * Javascript - Day 8
 * Array.prototype.reduce
 *
 * Array.prototype.reduce is a way of "reducing" elements in an array by calling
 * a "reducer" callback function on each element of the array in order, passing
 * in the return value from the calculation on the preceding element. The final
 * result of running the reducer across all elements of the array is a single value.
 *
 * Implement Array.prototype.reduce. To avoid overwriting the actual
 * Array.prototype.reduce which is being used by the autograder, we shall instead
 * implement it as Array.prototype.myReduce.
 *
 * @example
 * [1, 2, 3].myReduce((prev, curr) => prev + curr, 0); // 6
 * [1, 2, 3].myReduce((prev, curr) => prev + curr, 4); // 10
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce} MDN: Array.reduce
 * @source @danceswithcode @alithecodeguy
 * @tags #js #javascript #interview87
 */

// ============== SOLUTION ==============

declare global {
    interface Array<T> {
        myReduce(
            callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T
        ): T;

        myReduce(
            callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T,
            initialValue: T
        ): T;

        myReduce<U>(
            callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
            initialValue: U
        ): U;
    }
}
export {}

Array.prototype.myReduce = function <T, U>(
    this: T[],
    callbackfn: (acc: U, curr: T, index: number, array: T[]) => U,
    initialValue?: U
): U {
    const hasInitialValue = arguments.length >= 2

    let acc: U
    let startIndex = 0

    if (hasInitialValue) {
        acc = initialValue as U
    } else {
        if (this.length === 0)
            throw new TypeError("Reduce of empty array with no initial value")

        acc = this[0] as unknown as U
        startIndex = 1
    }

    for (let i = startIndex; i < this.length; i++) {
        acc = callbackfn(acc, this[i]!, i, this)
    }

    return acc
}

// ============== TEST ==============

console.log([1, 2, 3].myReduce((prev, curr) => prev + curr, 0)) // 6
console.log([1, 2, 3].myReduce((prev, curr) => prev + curr, 4)) // 10
console.log([1, 2, 3].myReduce((prev, curr) => prev + curr)) // 6

console.log(['a', 'b', 'c'].myReduce((acc, val, i) => ({ ...acc, [val]: i }), {})) // { a: 0, b: 1, c: 2 }

console.log([[1, 2], [3, 4], [5]].myReduce((acc, curr) => acc.concat(curr), [])) // [1, 2, 3, 4, 5]

console.log([3, 1, 4, 1, 5].myReduce((max, curr) => curr > max ? curr : max)) // 5

const arr = [{ type: 'a', val: 1 }, { type: 'b', val: 2 }, { type: 'a', val: 3 }]
console.log(arr.myReduce((acc, curr) => {
    if (!acc[curr.type]) acc[curr.type] = []
    acc[curr.type]!.push(curr)
    return acc
}, {} as Record<string, typeof arr>)) // { a: [{ type: 'a', val: 1 }, { type: 'a', val: 3 }], b: [{ type: 'b', val: 2 }] }
