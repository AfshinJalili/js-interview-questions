/**
 * Javascript + React - Day 7
 * useCounter
 *
 * Implement a useCounter hook that manages a counter state with convenience
 * utility methods.
 *
 * @param initialValue - Initial value of the counter (default: 0)
 * @returns Object with:
 *   - count: number - The current counter value
 *   - increment: () => void - Increment the counter
 *   - decrement: () => void - Decrement the counter
 *   - reset: () => void - Reset to initialValue
 *   - setCount: (value: number) => void - Set counter to value
 *
 * @example React Usage:
 * ```tsx
 * export default function Component() {
 *   const { count, increment, decrement, reset, setCount } = useCounter();
 *   return (
 *     <div>
 *       <p>Counter: {count}</p>
 *       <button onClick={increment}>Increment</button>
 *       <button onClick={decrement}>Decrement</button>
 *       <button onClick={reset}>Reset</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * @see {@link https://react.dev/reference/react/useState} React: useState
 * @source @danceswithcode @alithecodeguy
 * @tags #js #javascript #interview87
 */

// ============== SOLUTION ==============

function useCounter(initialValue: number = 0) {
    const state = { count: initialValue }

    return {
        get count() { return state.count },
        setCount: (value: number) => { state.count = value },
        increment: () => { state.count++ },
        decrement: () => { state.count-- },
        reset: () => { state.count = initialValue },
    }
}

// ============== TEST ==============

const counter = useCounter(5)
console.log(counter.count) // 5

counter.increment()
console.log(counter.count) // 6

counter.decrement()
console.log(counter.count) // 5

counter.setCount(10)
console.log(counter.count) // 10

counter.reset()
console.log(counter.count) // 5
