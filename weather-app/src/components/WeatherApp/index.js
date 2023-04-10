import React from "react";

import './index.css';
import Form from '../Form';
import View from "../View";

function WeatherApp() {
  return (
    <div className="WeatherApp">

      <header>
        <ul id="capitalCities">
          <li className="capitalCity">Paris</li>
          <li className="capitalCity">Rome</li>
          <li className="capitalCity">Séoul</li>
          <li className="capitalCity">Tokyo</li>
        </ul>
      </header>

      <Form />

      <View />

    </div>
  );
}

export default WeatherApp;

// 2c3ee268b3aa4d17a19ce1491eee794f
