import React, { useMemo, useState } from "react"

// Use to:
// 1 - skip expensive recalculations;
// 2 - skip re-rendering of components;
// 3 - memoize a dependency of another Hook.

// base case: cache a calculation between re-renders

// NOTE: In Strict Mode, React will call your calculation function TWICE
//  in order to help you find accidental impurities. 
// This is DEV-only behavior and does not affect production. 

const dependencies = []
function calculateValue() { }

const Sample = () => { 
    const cachedValue = useMemo(calculateValue, dependencies)
    return <div>hello world</div>
}



export const Memoed = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = slowFunction(number)
    // const doubleNumber = useMemo(() => slowFunction(number), [number])
    const themeStyles = {
        backgroundColor: dark ? 'yellow' : 'green', color: dark ? 'yellow' : 'green'
    }
    return (
        <>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}

function slowFunction(num) {
    console.log('This is slowFunction')
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2
}
