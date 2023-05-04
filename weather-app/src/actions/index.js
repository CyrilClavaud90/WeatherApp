// Composant controle pour le input du form
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  value,
});

// Pour changer l'unité des températures
export const CHANGE_TEMPERATURE_UNIT = 'CHANGE_TEMPERATURE_UNIT';
export const changeTemperatureUnit = (unit, symbol) => ({
  type: CHANGE_TEMPERATURE_UNIT,
  unit,
  symbol
});

// Call API avec le nom d'une ville pour la météo actuelle
export const FETCH_WEATHER_WITH_CITY_NAME = 'FETCH_WEATHER_WITH_CITY_NAME';
export const fetchWeatherWithCityName = (cityName) => ({
  type: FETCH_WEATHER_WITH_CITY_NAME,
  cityName,
});

// Save call API d'après le nom d'une ville pour la météo actuelle
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

// Call API avec les coordinnées d'une ville pour les prévisions météo
export const FETCH_DAILY_WEATHER_WITH_CITY_COORDINATE = 'FETCH_DAILY_WEATHER_WITH_CITY_COORDINATE';
export const fetchDailyWeatherWithCityCoordinate = (data) => ({
  type: FETCH_DAILY_WEATHER_WITH_CITY_COORDINATE,
  lat: data.lat,
  lon: data.lon,
});

// Save call API avec les coordinnées d'une ville pour les prévisions météo
export const SAVE_DAILY_WEATHER_WITH_CITY_COORDINATE = 'SAVE_DAILY_WEATHER_WITH_CITY_COORDINATE';
export const saveDailyWeatherWithCityCoordinate = (data) => ({
  type: SAVE_DAILY_WEATHER_WITH_CITY_COORDINATE,
  data,
});