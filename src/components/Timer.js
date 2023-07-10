import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [count, setCount] = useState(0)
  const [countInTimeout, setCountInTimeout] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCountInTimeout(count)
    }, 3000)
    setCount(5)
  }, [count, setCount])

  return (
    <div>
      Count: {count}
      <br />
      setTimeout Count: {countInTimeout}
    </div>
  )
}

export default Timer
