import { useContext } from 'react'
import {TextContext} from './UseContextHW'

const UseContextHWChild1 = () => {
    const text = useContext(TextContext)

  return (
    <div>{text[0]}</div>
  )             
}

export default UseContextHWChild1