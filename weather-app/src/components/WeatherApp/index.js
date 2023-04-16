import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherWithCityName } from "../../actions";
import { currentDate } from "../../selectors";

import './index.css';
import Form from '../Form';
import CurrentWeither from "../CurrentWeither";
import DailyWeather from "../DailyWeather";

function WeatherApp() {
  const dispatch = useDispatch();
  const fetchAPI = useSelector((state) => state.fetchAPI);

  // A l'init de l'app, fetch les données de Paris
  useEffect(() => {
    dispatch(fetchWeatherWithCityName("paris"));
  }, []);

  const handleClickOnButton = ((event) => {
    dispatch(fetchWeatherWithCityName(event.currentTarget.textContent));
    console.log(event.currentTarget.textContent);
  });

  return (
    <div id="WeatherApp">

        <h1>MY WEATHER APP</h1>
        <p id="date">{currentDate()}</p>
      <section id="top">
        <aside>
          <ul id="capitalCities">
            <li className="capitalCity" onClick={handleClickOnButton}>Berlin</li>
            <li className="capitalCity" onClick={handleClickOnButton}>Jakarta</li>
            <li className="capitalCity" onClick={handleClickOnButton}>Londres</li>
            <li className="capitalCity" onClick={handleClickOnButton}>Madrid</li>
            <li className="capitalCity" onClick={handleClickOnButton}>Paris</li>
            <li className="capitalCity" onClick={handleClickOnButton}>Rome</li>
            <li className="capitalCity" onClick={handleClickOnButton}>Séoul</li>
            <li className="capitalCity" onClick={handleClickOnButton}>Tokyo</li>
            <li className="capitalCity" onClick={handleClickOnButton}>Washington</li>
          </ul>
        </aside>

        {
          fetchAPI
          &&
          (
            <div>
              <Form />
            
              <CurrentWeither />
            </div>
          )
        }
      </section>

      {
        fetchAPI
        &&
        (
          <section id="bottom">
            <DailyWeather />
          </section>

        )
      }

    </div>
  );
}

export default WeatherApp;
