// ref - does not force component to re-update when it changes (unlike state)
// useRef
// returns: a mutable ref object 
// It has .current property which is initialized to the passed argument (initialValue).
// This object stays for the full lifetime of the component. 
// used for: focusing elements, storing prev values

import React, { useState, useEffect, useRef } from 'react'

function ButtonFocusInput() {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    inputEl.current.focus()
  }
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}



const Input = () => {
  const [name, setName] = useState('')
  const renderCount = useRef(1)
  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })
  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
    </>)
}



const Counter = () => {
    const [count, setCount] = useState(0)
    const prevCountRef = useRef()
  
    useEffect(() => {
      prevCountRef.current = count
    })
  
    const prevCount = prevCountRef.current
  
    return (
      <>
          <button onClick={() => setCount((value) => value + 1)}>
            Increase counter by 1
          </button>
          <button onClick={() => setCount((value) => value + 10)}>
            Increase counter by 10
          </button>
        <p>
          Now: {count}, before: {prevCount}
        </p>
      </>
    )
  }
  