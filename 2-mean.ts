/**
 * Calculates the mean (average) of the given array of numbers.
 *
 * @param {number[]} array - The array of numbers to average.
 * @returns {number} The mean of the numbers in the array, or NaN if the array is empty.
 *
 * @example
 * // returns 5
 * mean([4, 2, 8, 6]);
 *
 * @example
 * // returns 2.5
 * mean([1, 2, 3, 4]);
 *
 * @example
 * // returns 1.6666666666666667
 * mean([1, 2, 2]);
 *
 * @example
 * // returns NaN
 * mean([]);
 */
function mean(nums: number[]): number {
    if (nums.length == 0) return NaN
    return (nums.reduce((acc, value) => acc+value, 0)) / nums.length
}

