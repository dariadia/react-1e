// есть некий компонент-родитель, в котором храниться контекст и 
// два дочерних компонента. 
// При нажатии на кнопку в одном компоненте (дочернем), 
// будет происходить изменение текста в другом (втором дочернем) 

import { useState } from "react"
import { createContext } from "react"
import UseContextHWChild1 from "./UseContextHWChild1"
import UseContextHWChild2 from "./UseContextHWChild2"

export const TextContext = createContext()

const UseContextHW = () => {

const [text, setText] = useState('Some text passed via useContext from parent to UseContextHWChild1')

  return (
    <div>
        <TextContext.Provider value={[text, setText]}>
            <UseContextHWChild1 />
            <UseContextHWChild2 />
        </TextContext.Provider>
    </div>
  )
}

export default UseContextHW