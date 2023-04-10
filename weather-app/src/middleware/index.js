import axios from "axios";
import { FETCH_WEATHER_WITH_CITY_NAME, errorCallAPI, saveWeatherWithCityName } from "../actions";

const api = (store) => (next) => (action) => {
    switch(action.type) {
        case FETCH_WEATHER_WITH_CITY_NAME: {
            const { temperatureUnit } = store.getState();
            console.log(temperatureUnit);
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${action.cityName}&appid=2c3ee268b3aa4d17a19ce1491eee794f${temperatureUnit}`)
                .then((response) => {
                    console.log(response.data);
                    store.dispatch(saveWeatherWithCityName(response.data));
                })
                .catch((error) => {
                    console.log(error);
                    store.dispatch(errorCallAPI());
                  });
        }
        default:
            next(action);
            break;
    }
}

export default api;

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}