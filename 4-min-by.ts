/**
 * Javascript - Day 4
 * Min By
 *
 * Implement a function `minBy(array, iteratee)` that finds the element inside
 * array with the minimum value after going through iteratee. The function
 * should ignore elements where iteratee produces null or undefined.
 *
 * @param array - The array to iterate over
 * @param iteratee - The iteratee invoked per element (value) => comparable
 * @returns The element with minimum value, or undefined
 *
 * @example
 * minBy([2, 3, 1, 4], (num) => num); // 1
 * minBy([{ n: 1 }, { n: 2 }], (o) => o.n); // { n: 1 }
 * minBy([{ n: 1 }, { n: 2 }], (o) => o.m); // undefined
 *
 * @see {@link https://lodash.com/docs/4.17.15#minBy} Lodash: minBy
 * @source @danceswithcode @alithecodeguy
 * @tags #js #javascript #interview87
 */

// ============== SOLUTION ==============

function minBy<T, R extends number | string>(array: T[], iteratee: (value: T) => R): T | undefined {
    let minElement: T | undefined
    let minValue: R | undefined

    for (const element of array) {
        const value = iteratee(element)
        if (value == null) continue

        if (minValue == null || value < minValue) {
            minElement = element
            minValue = value
        }
    }

    return minElement
}

// ============== TEST ==============

console.log(minBy([2, 3, 1, 4], (num) => num)) // 1
console.log(minBy([{ n: 1 }, { n: 2 }], (o) => o.n)) // { n: 1 }
console.log(minBy([{ n: 1 }, { n: 2 }], (o) => (o as any).m)) // undefined
