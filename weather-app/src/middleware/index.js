import axios from "axios";
import { FETCH_DAILY_WEATHER_WITH_CITY_COORDINATE, FETCH_WEATHER_WITH_CITY_NAME, FETCH_WEATHER_WITH_LAST_CITY_NAME, errorCallAPI, fetchDailyWeatherWithCityCoordinate, saveDailyWeatherWithCityCoordinate, saveWeatherWithCityName, saveWeatherWithLastCityName } from "../actions";
import { toast } from "react-toastify";

const api = (store) => (next) => (action) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const { temperature: { temperatureUnit } } = store.getState();

    switch(action.type) {
        case FETCH_WEATHER_WITH_CITY_NAME: {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${action.cityName}&appid=${apiKey}${temperatureUnit}`)
                .then((response) => {
                    store.dispatch(saveWeatherWithCityName(response.data));
                    store.dispatch(fetchDailyWeatherWithCityCoordinate(response.data.coord));
                })
                .catch(() => {
                    store.dispatch(errorCallAPI());
                    toast.error('An error has occurred. Please check the spelling of the city', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        theme: "light",
                        });
                  });
        }

        case FETCH_WEATHER_WITH_LAST_CITY_NAME: {
            const { lastFormValue } = store.getState();
            
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${lastFormValue}&appid=${apiKey}${temperatureUnit}`)
                .then((response) => {
                    store.dispatch(saveWeatherWithLastCityName(response.data));
                    store.dispatch(fetchDailyWeatherWithCityCoordinate(response.data.coord));
                })
                // .catch((error) => {
                //     console.log(error);
                //     store.dispatch(errorCallAPI());
                //   });
        }

        case FETCH_DAILY_WEATHER_WITH_CITY_COORDINATE: {
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${action.lat}&lon=${action.lon}&appid=${apiKey}${temperatureUnit}`)
                .then((response) => {
                    store.dispatch(saveDailyWeatherWithCityCoordinate(response.data));
                })
        }

        default:
            next(action);
            break;
    }
}

export default api;
