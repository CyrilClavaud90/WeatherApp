import React from "react";

import './index.css';
import Form from '../Form';

function WeatherApp() {
  return (
    <div className="WeatherApp">

      <header>
        <h1>Weather App</h1>
      </header>

      <Form />

    </div>
  );
}

export default WeatherApp;

// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=2c3ee268b3aa4d17a19ce1491eee794f

// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=2c3ee268b3aa4d17a19ce1491eee794f

// http://api.openweathermap.org/geo/1.0/direct?q=London,GB&appid=2c3ee268b3aa4d17a19ce1491eee794f&units=metric

// 2c3ee268b3aa4d17a19ce1491eee794f
