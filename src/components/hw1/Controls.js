import React, { useState } from 'react'

// в приложении несколько кнопок
// начальное состояние приложения: под каждой кнопкой ничего нет
// если нажать кнопку - под ней появится текст (из MOCK), если нажать снова, то текст скроется
// одновременно могут быть нажаты все/несколько кнопок

const MOCK = [
    "Lorem ipsum dolor", 
    "sit amet, consectetur adipiscing elit.", 
    "Pellentesque sodales vestibulum", 
    "nisi a ultricies.", 
    "Donec rutrum, nunc sed ornare vulputate,", 
    "justo velit finibus ante,", 
    "vulputate lobortis mauris", 
    "nisl quis ante."
]

const Controls = () => {
    const [initialState, setInitialState] = useState({
        btn1: false,
        btn2: false,
        btn3: false,
        btn4: false,
        btn5: false,
    })

    const handleClick = (id) => {
        setInitialState({
            ...initialState,
            [id]: initialState[id] ? false : true
        })
    }

    return (
        <div style={{maxWidth: '80%', margin: '0 auto'}}>
            <h2>Task 1</h2>
            <p style={{color: 'gray'}}>в приложении несколько кнопок
                начальное состояние приложения: под каждой кнопкой ничего нет
                если нажать кнопку - под ней появится текст (из MOCK), если нажать снова, то текст скроется
                одновременно могут быть нажаты все/несколько кнопок</p>
            <div style={{display: 'flex', gap: '20px', margin: '1rem', height: '200px'}}>
            
                <span style={{display: 'flex', flexDirection: 'column', width: '200px'}}>
                    <button style={{cursor: 'pointer'}} onClick={() => handleClick('btn1')}>get weather</button>
                    {initialState.btn1 && <span>{MOCK[1]}</span>}
                </span>
                <span style={{display: 'flex', flexDirection: 'column', width: '200px'}}>
                    <button style={{cursor: 'pointer'}} onClick={() => handleClick('btn2')}>get currency rates</button>
                    {initialState.btn2 && <span>{MOCK[2]}</span>}
                </span>
                <span style={{display: 'flex', flexDirection: 'column', width: '200px'}}>
                    <button style={{cursor: 'pointer'}} onClick={() => handleClick('btn3')}>get humidity</button>
                    {initialState.btn3 && <span>{MOCK[3]}</span>}
                </span>
                <span style={{display: 'flex', flexDirection: 'column', width: '200px'}}>
                    <button style={{cursor: 'pointer'}} onClick={() => handleClick('btn4')}>get sports news</button>
                    {initialState.btn4 && <span>{MOCK[4]}</span>}
                </span>
                <span style={{display: 'flex', flexDirection: 'column', width: '200px'}}>
                    <button style={{cursor: 'pointer'}} onClick={() => handleClick('btn5')}>get news</button>
                    {initialState.btn5 && <span>{MOCK[5]}</span>}
                </span>
            </div>
        </div>
    
    )
}

export default Controls