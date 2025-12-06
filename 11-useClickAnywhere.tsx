/**
 * Javascript + React - Day 11
 * useClickAnywhere
 *
 * Implement a useClickAnywhere hook that handles click events anywhere on
 * the document.
 *
 * @param handler - The function to be called when a click event is detected
 *   anywhere on the document
 *
 * @example
 * ```tsx
 * export default function Component() {
 *   const [count, setCount] = useState(0);
 *
 *   useClickAnywhere(() => {
 *     setCount((prev) => prev + 1);
 *   });
 *
 *   return <p>Click count: {count}</p>;
 * }
 * ```
 *
 * @see {@link https://react.dev/reference/react/useEffect} React: useEffect
 * @source @danceswithcode @alithecodeguy
 * @tags #js #javascript #interview87
 */

// ============== SOLUTION ==============

import { useEffect, useRef } from "react";

export function useClickAnywhere(handler: (event: MouseEvent) => void) {
  const handlerRef = useRef(handler);

  handlerRef.current = handler;

  useEffect(() => {
    function listener(event: MouseEvent) {
      handlerRef.current(event);
    }

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, []);
}

// ============== TEST ==============

import { useState } from "react"
import { createRoot } from "react-dom/client"

export default function Component() {
    const [count, setCount] = useState(0)

    useClickAnywhere(() => {
        setCount((prev) => prev + 1)
    })

    return <p>Click count: {count}</p>
}

if (typeof document !== 'undefined') {
    const rootElement = document.getElementById('root')
    if (rootElement) {
        const root = createRoot(rootElement)
        root.render(<Component />)
    }
}
