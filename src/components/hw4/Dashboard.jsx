// приложение – это личный дашборд юзера
// Что есть на странице:

// Юзер только открыл – там написано "Привет!", рядом поле ввода 
// для "его имени"
// поле ввода для "его имени" фокусируется при открытии страницы 
// (mount)
// Если имя ввел, то (state) хранит и напишет "Привет, (имя)!"

// Под этим есть кнопки
// 1. Кнопка: узнать погоду. Нажать - 
// fetch (https://openweathermap.org) - внизу на странице 
// отобразится прогноз (* нужен api_key, есть беслатный план)
// 2. Кнопка: для отображения инфо об IP юзера (вдруг он 
// проверяет VPN) https://ipapi.co/api/#location-of-a-specific-ip - 
// внизу на странице отобразится инфо, при этом скроется инфо другой 
// кнопки, если ее нажали ранее
// 3. Кнопка: узнать выходные в стране (пока показать можно 
// списком, дата - название) 
// https://date.nager.at/api/v2/publicholidays/2023/ES - 
// страну можно указывать и менять

import { useRef, useEffect, useState } from "react"

const Dashboard = () => {
    const inputEl = useRef(null)
    const [name, setName] = useState('')
    const [submittedName, setSubmittedName] = useState('')

    const btnHandler = () => {
        setSubmittedName(name)
        setName('')
    }

    useEffect( () => {
        inputEl.current.focus()
    },[])

    const [weatherData, setWeatherData] = useState()
    const [apiData, setApiData] = useState()
    const [holidays, setHolidays] = useState()


    const weatherBtnHandler = () => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Larnaca,cy&units=metric&APPID=1a934765cdfca4f5eb462ab85bd83c2a')
            .then(res => res.json())
            .then(data => setWeatherData(data))
            .then(setApiData())
    }

    const apiBtnHandler = () => {
        fetch('https://ipapi.co/213.7.177.58/json/')
            .then(res => res.json())
            .then(data => setApiData(data))
            .then(setWeatherData())
    }

    const selectHandler = () => {
        const country = document.getElementById("countrySelect").value

        fetch(`https://date.nager.at/api/v2/publicholidays/2023/${country}`)
        .then(res => res.json())
        .then(data => setHolidays(data))
    }
 

  return (
    <div>
        {!submittedName && <h2>Hi!</h2>}
        {submittedName && <h2>Hi, {submittedName}!</h2>}
        
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <input style={{width: '300px', margin: '0 auto'}} type='text' ref={inputEl} value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name..'></input>
            <button style={{width: '100px', margin: '1rem auto'}} onClick={btnHandler}>Submit</button>
        </div>
        <hr />

        <div style={{display: 'flex', justifyContent: 'center', gap: '5rem'}}>
            <div style={{display: 'flex', flexDirection: 'column', width: '200px', height: '200px'}}>
                <button onClick={weatherBtnHandler} style={{width: '100px', margin: '0 auto'}}>Get Weather</button>
                {weatherData && 
                    <div>
                        <p>City: {weatherData.name}</p>
                        <p>Temperature: {weatherData.main.temp}°C</p>
                        <p>Description: {weatherData.weather[0].description}</p>    
                    </div>
                }       
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '200px', height: '200px'}}>
                <button onClick={apiBtnHandler} style={{width: '100px', margin: '0 auto'}}>Get City by API</button>
                {apiData && 
                    <div>
                        <p>City: {apiData.city}</p>
                        <p>Region: {apiData.region}</p>
                        <p>IP: {apiData.ip}</p>
                    </div>
                }       
            </div>  
        </div>
        <hr />
        
        <div style={{ display: 'flex', justifyContent: 'left', gap: '5rem', margin: '0 5rem'}}>
            <form>
            <label htmlFor="favColor">Select country:</label>
            <br />
            <select id="countrySelect" onChange={selectHandler}>
               <option value="FR">France</option>
                <option value="ES">Spain</option>
                <option value="RU">Russia</option>
                <option value="US">United States</option>
                <option value="UA">Ukraine</option>
            </select>
            </form>
            <ul>
            {holidays && 
                holidays.map(item => (
                    <li style={{textAlign: 'left'}}>{item.date} - {item.localName} - {item.name}</li>
                ))}
            </ul>
        </div>

    </div>
  )
}

export default Dashboard