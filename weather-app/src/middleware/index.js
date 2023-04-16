import axios from "axios";
import { FETCH_DAILY_WEATHER_WITH_CITY_COORDINATE, FETCH_WEATHER_WITH_CITY_NAME, FETCH_WEATHER_WITH_LAST_CITY_NAME, errorCallAPI, fetchDailyWeatherWithCityCoordinate, saveDailyWeatherWithCityCoordinate, saveWeatherWithCityName, saveWeatherWithLastCityName } from "../actions";

const api = (store) => (next) => (action) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const { temperature: { temperatureUnit } } = store.getState();

    switch(action.type) {
        case FETCH_WEATHER_WITH_CITY_NAME: {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${action.cityName}&appid=${apiKey}${temperatureUnit}`)
                .then((response) => {
                    console.log(response.data);
                    store.dispatch(saveWeatherWithCityName(response.data));
                    store.dispatch(fetchDailyWeatherWithCityCoordinate(response.data.coord));
                    console.log(response.data.coord);
                })
                .catch((error) => {
                    console.log(error);
                    store.dispatch(errorCallAPI());
                  });
        }

        case FETCH_WEATHER_WITH_LAST_CITY_NAME: {
            const { lastFormValue } = store.getState();
            
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${lastFormValue}&appid=${apiKey}${temperatureUnit}`)
                .then((response) => {
                    console.log(response.data);
                    store.dispatch(saveWeatherWithLastCityName(response.data));
                    store.dispatch(fetchDailyWeatherWithCityCoordinate(response.data.coord));
                })
                .catch((error) => {
                    console.log(error);
                    store.dispatch(errorCallAPI());
                  });
        }

        case FETCH_DAILY_WEATHER_WITH_CITY_COORDINATE: {
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${action.lat}&lon=${action.lon}&appid=${apiKey}${temperatureUnit}`)
                .then((response) => {
                    console.log(response.data);
                    store.dispatch(saveDailyWeatherWithCityCoordinate(response.data));
                })
        }

        default:
            next(action);
            break;
    }
}

export default api;

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}
