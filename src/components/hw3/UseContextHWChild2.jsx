import { useContext } from 'react'
import {TextContext} from './UseContextHW'

const UseContextHWChild2 = () => {
  const anyName = useContext(TextContext)

  const btnHandler = () => {
    anyName[1]('Text changed from UseContextHWChild2 component')
  }

  return (
    <div>
      <button onClick={btnHandler}>Change text</button>
    </div>
  )
}

export default UseContextHWChild2