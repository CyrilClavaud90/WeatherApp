import { createStore, compose, applyMiddleware } from 'redux';

import reducer from '../reducers';
import api from '../middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(api)
);

const store = createStore(
    reducer,
    enhancers,
);

export default store;