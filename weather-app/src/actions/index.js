// Composant controle pour le input du form
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  value,
});

// Pour changer l'unité des températures
export const CHANGE_TEMPERATURE_UNIT = 'CHANGE_TEMPERATURE_UNIT';
export const changeTemperatureUnit = (unit) => ({
  type: CHANGE_TEMPERATURE_UNIT,
  unit,
});

// Call API avec le nom d'une ville
export const FETCH_WEATHER_WITH_CITY_NAME = 'FETCH_WEATHER_WITH_CITY_NAME';
export const fetchWeatherWithCityName = (cityName) => ({
  type: FETCH_WEATHER_WITH_CITY_NAME,
  cityName,
});

// Save call API d'après le nom d'une ville
export const SAVE_WEATHER_WITH_CITY_NAME = 'SAVE_WEATHER_WITH_CITY_NAME';
export const saveWeatherWithCityName = (data) => ({
  type: SAVE_WEATHER_WITH_CITY_NAME,
  data,
});

// Error call API
export const ERROR_CALL_API = 'ERROR_CALL_API';
export const errorCallAPI = () => ({
  type: ERROR_CALL_API,
});