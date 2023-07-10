import { useEffect } from "react"

export function Example(props) {
  const { name } = props.name

  useEffect(() => {
    console.log('use effect')
    // return () => {
    //   console.log('I shall unmount')
    // }
  }, [name])
    
  return <div>{name}</div>
}

// see Timer.js
