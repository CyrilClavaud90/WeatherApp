import { CHANGE_VALUE } from "../actions";

const initialState = {
    formValue: '',
    Location: {},
};

function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case CHANGE_VALUE:
            return {
                ...state,
                formValue: action.value,
            }

        default:
            return state;
    }
}

export default reducer;