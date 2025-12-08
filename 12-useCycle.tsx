/**
 * Javascript + React - Day 12
 * useCycle
 *
 * Implement a useCycle hook that cycles through a list of values. Each time
 * the returned function is called, it moves to the next value in the cycle.
 *
 * @param values - One or more values to cycle through
 * @returns A tuple containing:
 *   - value: T - The current value in the cycle
 *   - next: () => void - Function to advance to the next value
 *
 * @example
 * ```tsx
 * export default function Component() {
 *   const [value, next] = useCycle('on', 'off', 'standby');
 *
 *   return (
 *     <div>
 *       <p>Status: {value}</p>
 *       <button onClick={next}>Next</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * @see {@link https://react.dev/reference/react/useState} React: useState
 * @see {@link https://react.dev/reference/react/useRef} React: useRef
 * @source @danceswithcode @alithecodeguy
 * @tags #js #javascript #interview87
 */

// ============== SOLUTION ==============

import { useState, useRef } from "react"
import { cycle } from "./9-cycle"

export function useCycle<T>(...values: T[]): [value: T, next: () => void] {
    const cycleFnRef = useRef<(() => T) | null>(null)

    if (!cycleFnRef.current) {
        cycleFnRef.current = cycle(...values)
    }

    const [value, setValue] = useState(() => cycleFnRef.current!())

    const next = () => {
        setValue(cycleFnRef.current!())
    }

    return [value, next]
}

// ============== TEST ==============

import { createRoot } from "react-dom/client"

function TestComponent() {
    const [status, nextStatus] = useCycle('on', 'off', 'standby')
    const [color, nextColor] = useCycle('red', 'green', 'blue')

    return (
        <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
            <div style={{ marginBottom: '1rem' }}>
                <p>Status: {status}</p>
                <button onClick={nextStatus}>Next Status</button>
            </div>
            <div>
                <p>Color: {color}</p>
                <button onClick={nextColor}>Next Color</button>
            </div>
        </div>
    )
}

if (typeof document !== 'undefined') {
    const rootElement = document.getElementById('root')
    if (rootElement) {
        const root = createRoot(rootElement)
        root.render(<TestComponent />)
    }
}
