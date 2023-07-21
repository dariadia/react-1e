// в приложении есть поле input и кнопка button
// если нажать кнопку - фокусируется поле
// под полем подписано прошлое значение, которое ввел в поле юзер 
// (представим, что он ошибся и там сообщение вроде "вы ввели неверное {значение}")

import { useState } from 'react'
import { useEffect, useRef } from 'react'

function UseRefHW() {
  const inputEl = useRef(null)
  const [text, setText] = useState('')
  const prevText = useRef()
  
  useEffect(() => {
    prevText.current = text
  })

  const btnHandler = (e) => {
    e.preventDefault()
    inputEl.current.focus()
    setText(document.getElementById('inputFld').value)
    document.getElementById('inputFld').value = ''
  }
   
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <form>
        <input id='inputFld' ref={inputEl} type='text' placeholder='Please enter something..'></input>
        <button type='submit' onClick={btnHandler}>Focus on the Input field</button>
      </form>
      <p>Previous text:</p>
      {prevText.current}
      <p>Latest text:</p>
      {text}
      
    </div>
  )
}

export default UseRefHW