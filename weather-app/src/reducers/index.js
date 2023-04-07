import { CHANGE_VALUE, SAVE_WEATHER_WITH_CITY_NAME } from "../actions";

const initialState = {
    formValue: '',
    city: {},

};

function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case CHANGE_VALUE:
            return {
                ...state,
                formValue: action.value,
            }

        case SAVE_WEATHER_WITH_CITY_NAME:
            return {
                ...state,
                formValue: '',
                city: action.data,
            }

        default:
            return state;
    }
}

export default reducer;