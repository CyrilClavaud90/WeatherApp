import { CHANGE_TEMPERATURE_UNIT, CHANGE_VALUE, ERROR_CALL_API, SAVE_DAILY_WEATHER_WITH_CITY_COORDINATE, SAVE_WEATHER_WITH_CITY_NAME, SAVE_WEATHER_WITH_LAST_CITY_NAME } from "../actions";

const initialState = {
    fetchAPI: false,
    secondFetchAPI: false,
    formValue: '',
    lastFormValue: 'paris',
    temperature: {
        temperatureUnit: '&units=metric',
        temperatureymbol: '°C',
    },
    city: {
        name: '',
        country: '',
        time: '',
        main: '',
        icon:'',
        temperature: '',
        feelsLike:'',
        humidity: '',
        windSpeed: '',
        sunrise: '',
        sunset: '',
        temperatureMax: '',
        temperatureMin: '',
    },
    list: {},

};

function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case CHANGE_VALUE:
            return {
                ...state,
                formValue: action.value,
            }

        case CHANGE_TEMPERATURE_UNIT:
            return {
                ...state,
                temperature: {
                    temperatureUnit: action.unit,
                    temperatureymbol: action.symbol,
                }
            }

        case SAVE_WEATHER_WITH_CITY_NAME:
            return {
                ...state,
                fetchAPI: true,
                secondFetchAPI: false,
                lastFormValue: action.data.name,
                formValue: '',
                city: {
                    name: action.data.name,
                    country: action.data.sys.country,
                    time: action.data.dt,
                    main: action.data.weather[0].main,
                    icon: action.data.weather[0].icon,
                    temperature: action.data.main.temp,
                    feelsLike: action.data.main.feels_like,
                    humidity: action.data.main.humidity,
                    windSpeed: action.data.wind.speed,
                    sunrise: action.data.sys.sunrise,
                    sunset: action.data.sys.sunset,
                    temperatureMax: action.data.main.temp_max,
                    temperatureMin: action.data.main.temp_min,
                },
                list: {},
            }

        case SAVE_WEATHER_WITH_LAST_CITY_NAME:
            return {
                ...state,
                secondFetchAPI: false,
                lastFormValue: action.data.name,
                city: {
                    name: action.data.name,
                    country: action.data.sys.country,
                    time: action.data.dt,
                    main: action.data.weather[0].main,
                    icon: action.data.weather[0].icon,
                    temperature: action.data.main.temp,
                    feelsLike: action.data.main.feels_like,
                    humidity: action.data.main.humidity,
                    windSpeed: action.data.wind.speed,
                    sunrise: action.data.sys.sunrise,
                    sunset: action.data.sys.sunset,
                    temperatureMax: action.data.main.temp_max,
                    temperatureMin: action.data.main.temp_min,
                },
                list: {},
            }
        
        case SAVE_DAILY_WEATHER_WITH_CITY_COORDINATE:
            return {
                ...state,
                secondFetchAPI: true,
                list: action.data,
            }
        
        case ERROR_CALL_API:
            return {
                ...state,
                formValue: '',
            }

        default:
            return state;
    }
}

export default reducer;