import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

// Получить данные https://api.github.com/users
// Отобразить список юзеров на странице, вывести любую информацию о них (полученную из запроса)



function UseEffectFetch() {
    const [data, setData] = useState([])

    function getData() {fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => setData(data))
    }

    useEffect(() => {
        getData()
    },[])

  return (
    <div>
        <h2>Data from <u>https://api.github.com/users</u></h2>
        <ul style={{textAlign: 'left'}}>
            {data.map(item => (
                <li>{item.id} {item.login} {item.url}</li>
            ))}     

        </ul>
    </div>

    
  )

}

export default UseEffectFetch