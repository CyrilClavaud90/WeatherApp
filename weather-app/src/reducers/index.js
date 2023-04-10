import { CHANGE_TEMPERATURE_UNIT, CHANGE_VALUE, ERROR_CALL_API, SAVE_WEATHER_WITH_CITY_NAME } from "../actions";

const initialState = {
    formValue: '',
    temperatureUnit: '&units=metric',
    city: {},

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
                temperatureUnit: action.unit,
            }

        case SAVE_WEATHER_WITH_CITY_NAME:
            return {
                ...state,
                formValue: '',
                city: action.data,
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