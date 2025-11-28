/**
 * Javascript - Day 2
 * Mean
 *
 * Implement a function `mean` that returns the mean (average) of all values
 * in the given array. If the array is empty, return NaN.
 *
 * @example
 * mean([4, 2, 8, 6]); // 5
 * mean([1, 2, 3, 4]); // 2.5
 * mean([1, 2, 2]); // 1.6666666666666667
 * mean([]); // NaN
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce} MDN: Array.reduce
 * @source @danceswithcode @alithecodeguy
 * @tags #js #javascript #interview
 */

// ============== SOLUTION ==============

function mean(nums: number[]): number {
    if (nums.length === 0) return NaN
    return nums.reduce((acc, val) => acc + val, 0) / nums.length
}

// ============== TEST ==============

console.log(mean([4, 2, 8, 6])) // 5
console.log(mean([1, 2, 3, 4])) // 2.5
console.log(mean([1, 2, 2])) // 1.6666666666666667
console.log(mean([])) // NaN
