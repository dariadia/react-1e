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

export const Controls = () => {
    return (<div>
        <span>
            <button>get weather</button>
            <span>{/**I show something*/}</span>
        </span>
        <span>
            <button>get currency rates</button>
            <span>{/**I show something*/}</span>
        </span>
        <span>
            <button>get humidity</button>
            <span>{/**I show something*/}</span>
        </span>
        <span>
            <button>get sports news</button>
            <span>{/**I show something*/}</span>
        </span>
        <span>
            <button>get news</button>
            <span>{/**I show something*/}</span>
        </span>
    </div>)
}
