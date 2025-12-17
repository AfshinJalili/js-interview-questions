/**
 * Javascript - Day 13
 * Count By
 *
 * Implement a function countBy(array, iteratee) that creates an object composed
 * of keys generated from the results of running each element of array through
 * iteratee. The corresponding value of each key is the number of times the key
 * was returned by iteratee.
 *
 * @param array - The array to iterate over
 * @param iteratee - Function invoked per element to produce the key
 * @returns Object where keys are iteratee results and values are counts
 *
 * @example
 * countBy([6.1, 4.2, 6.3], Math.floor) // { 4: 1, 6: 2 }
 * countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n) // { 3: 2, 5: 1 }
 *
 * @source @danceswithcode @alithecodeguy
 * @tags #js #javascript #interview87
 */

// ============== SOLUTION ==============

function countBy(array, iteratee) {
    const result = {}

    for (const item of array) {
        const key = iteratee(item)
        result[key] = (result[key] || 0) + 1
    }

    return result
}

function countBy2(array, iteratee) {
    const trasformedArr = array.map(item => iteratee(item));
    return trasformedArr.reduce((prev, current) => {
        if (prev[current] > 0) prev[current]++
        else prev[current] = 1
        return prev
    }, {})
}

// ============== TEST ==============

console.log(countBy([6.1, 4.2, 6.3], Math.floor)) // { 4: 1, 6: 2 }
console.log(countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n)) // { 3: 2, 5: 1 }
console.log(countBy([], (o) => o)) // {}
console.log(countBy([{ n: 1 }, { n: 2 }], (o) => o.m)) // { undefined: 2 }