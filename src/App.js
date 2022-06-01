import React,{ useState } from 'react'
import './App.css';

const App = () => {
  const [city,setCity] = useState('');
  const [weatherData,setWeatherData] = useState([{}]);


  const apiKey = '7c670146e0f9b6f274b52e8513984eb5';
  console.log(weatherData)
  const getWeather = (event) => {
    if (event.key === 'Enter'){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
        }
      )
    }
  }
  
  return (
    <div className='container'>
      <input type='text' 
      className='input' 
      placeholder='Enter City...'
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather}
      />

    {typeof weatherData.main === 'undefined' ? (
      <div>
        <p>Welcome! Enter in a city to get weather</p>
      </div>
    ): (
      <div className='weather-information'>
        <p className='city'>{weatherData.name}</p>
        <p className='temp'>{Math.round(weatherData.main.temp)}°F  </p>
        <p className='weather'>{weatherData.weather[0].main}</p>
      </div>
    )}


    {weatherData.cod === '404' ? (
      <p>City not found</p>
    ):(
      <>
      </>
    )}
    </div>
  )
}

export default App
