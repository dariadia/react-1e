import React, { useState, useEffect } from 'react'

// в приложении есть кнопка, если на нее нажать - таймер начинает считать
// на экране показывается счет таймера
// после 20 секунд - всплывает (window) alert - который говорит юзеру что угодно
// после чего таймер останавливается.

// *доп: в приложении есть и поле, 
// куда юзер может внести "сколько секунд", после истечения которых покажется alert
// поле скрывается, если юзер ввел число и таймер считает
// поле появляется снова, когда показался alert и таймер обнулился

const Alert = () => {
    
    const [timer, setTimer] = useState([])
    
    const timeDecrease = () => {
            setTimer(timer - 1000)
        } 

    useEffect(() => {
        if (timer > 0 ){
            setTimeout(timeDecrease, 1000);
        } else if (timer === 0 && document.getElementById('setTimeInput').disabled) {
        alert('Time is up!')
        document.getElementById('setTimeInput').disabled = false
        document.getElementById('submitBtn').disabled = false
        }
    }, [timer])

    const handleSubmit = (event) => {
        event.preventDefault()
        const value = document.getElementById('setTimeInput').value
        if(value){
            setTimer(value * 1000)
        } else {
            setTimer(20000)
        }
        
        document.getElementById('setTimeInput').value = ''
        document.getElementById('setTimeInput').disabled = true
        document.getElementById('submitBtn').disabled = true
        }

  return (
    <div style={{maxWidth: '80%', margin: '0 auto'}}>
        <hr  />
        <h2>Task 2</h2>
            <p style={{color: 'gray'}}>в приложении есть кнопка, если на нее нажать - таймер начинает считать
                на экране показывается счет таймера
                после 20 секунд - всплывает (window) alert - который говорит юзеру что угодно
                после чего таймер останавливается.
                <br />
                <br />
                *доп: в приложении есть и поле, 
                куда юзер может внести "сколько секунд", после истечения которых покажется alert
                поле скрывается, если юзер ввел число и таймер считает
                поле появляется снова, когда показался alert и таймер обнулился</p>
        <div style={{position: 'absolute', left: '0px', right: '0px'}}>
            
            <div style={{marginTop: '1rem'}}>Timer: <b>{timer / 1000} sec</b></div>

            <form onSubmit={handleSubmit}>
                <p>Enter time in seconds or leave empty (will be 20 sec by default):</p>
                <input  style={{display: 'block', margin: '0 auto'}}  id='setTimeInput' type="number" onChange={(e) => e.target.value * 1000} />
                <button id='submitBtn' type="submit" style={{cursor: 'pointer'}}>Start</button>
            </form>
        </div>
    </div>
  )
}

export default Alert