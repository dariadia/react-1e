import React, { useEffect, useRef, useLayoutEffect, useState } from 'react'

// similar to useEffect
// main difference: when they run
// (async) useEffect: render() => useEffect() => re-render()...
// (sync) useLayoutEffect: useLayoutEffect() => render() => re-render()...
// use when: DOM position matters, e.g. if you needed to change the background color of a DOM element as a side effect 
// useLayoutEffect: rare, niche*

export const PopupFaulty = () => {
  const [show, setShow] = useState(false)
  const popup = useRef()
  const button = useRef()
  useEffect(() => {
    if (popup.current == null || button.current == null) return
    const { bottom } = button.current.getBoundingClientRect()
    popup.current.style.top = `${bottom + 25}px`
  }, [show])
  return (
    <>
      <button ref={button} onClick={() => setShow(prev => !prev)}>Click Here </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>This is a popup </div>)}
    </>
  )
}

export const Popup = () => {
    const [show, setShow] = useState(false)
    const popup = useRef()
    const button = useRef()
    useLayoutEffect(() => {
      if (popup.current == null || button.current == null) return
      const { bottom } = button.current.getBoundingClientRect()
      popup.current.style.top = `${bottom + 25}px`
    }, [show])
    return (
      <>
        <button ref={button} onClick={() => setShow(prev => !prev)}>Click Here </button>
        {show && (
          <div style={{ position: "absolute" }} ref={popup}>This is a popup </div>)}
      </>
    )
  }
