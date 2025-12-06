/**
 * Javascript + React - Day 6
 * useBoolean
 *
 * Implement a useBoolean hook that manages a boolean state with convenience
 * utility methods.
 *
 * @param initialValue - Initial value of the boolean state (default: false)
 * @returns Object with:
 *   - value: boolean - The current boolean state
 *   - setTrue: () => void - Set state to true
 *   - setFalse: () => void - Set state to false
 *   - toggle: () => void - Toggle the state
 *
 * @example React Usage:
 * ```tsx
 * export default function Component() {
 *   const { value, setTrue, setFalse, toggle } = useBoolean();
 *   return (
 *     <div>
 *       <p>{value ? 'enabled' : 'disabled'}</p>
 *       <button onClick={setTrue}>Enable</button>
 *       <button onClick={setFalse}>Disable</button>
 *       <button onClick={toggle}>Toggle</button>
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

function useBoolean(initialValue: boolean = false) {
    const state = { value: initialValue }

    return {
        get value() { return state.value },
        setTrue: () => { state.value = true },
        setFalse: () => { state.value = false },
        toggle: () => { state.value = !state.value },
    }
}

// ============== TEST ==============

const bool = useBoolean()
console.log(bool.value) // false

bool.setTrue()
console.log(bool.value) // true

bool.setFalse()
console.log(bool.value) // false

bool.toggle()
console.log(bool.value) // true

bool.toggle()
console.log(bool.value) // false
