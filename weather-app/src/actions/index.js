// Call API via un nom de ville
export const FETCH_WEATHER_WITH_CITY_NAME = 'FETCH_WEATHER_WITH_CITY_NAME';
export const fetchWeatherWithCityName = (cityName) => ({
  type: FETCH_WEATHER_WITH_CITY_NAME,
  cityName,
});

// Controleur controle pour le input du form
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  value,
});