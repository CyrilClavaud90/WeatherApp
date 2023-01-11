import axios from "axios";

const api = (store) => (next) => (action) => {
    switch(action.type) {
        default:
            next(action);
            break;
    }
}

export default api;