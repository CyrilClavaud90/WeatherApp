import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTemperatureUnit, changeValue, fetchWeatherWithCityName} from "../../actions";

import "./index.css";
import loupe from "../../assets/search-white.png";

function Form() {
    const dispatch = useDispatch();
    const value = useSelector((state) => state.formValue);
    const city = useSelector((state) => state.lastFormValue);

    // Composant controllé de l'input
    const handleChange = (event) => {
        dispatch(changeValue(event.currentTarget.value));
    };

    // A l'envoi du formulaire
    const handleSubmit = ((event) => {
        event.preventDefault();
        dispatch(fetchWeatherWithCityName(value));
    });

    // Au changement de l'unité de température
    const handleTemperatureUnit = ((event) => {
        dispatch(changeTemperatureUnit(event.currentTarget.name, event.currentTarget.textContent));
        dispatch(fetchWeatherWithCityName(city));
    });

    return (
        <div id="search">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={value}
                    placeholder="Search for a city..."
                />
                <button type="submit"><img src={loupe} alt="" /></button>
            </form>

            <div id="temperatureUnits">
                <button
                    className="unit"
                    name="&units=metric"
                    onClick={handleTemperatureUnit}
                >
                    °C
                </button>
                <p> | </p>
                <button
                    className="unit"
                    name="&units=imperial"
                    onClick={handleTemperatureUnit}
                >
                    °F
                </button>
                <p> | </p>
                <button
                    className="unit"
                    name=""
                    onClick={handleTemperatureUnit}
                >
                    K
                </button>
            </div>
        </div>
    );
};

export default Form;