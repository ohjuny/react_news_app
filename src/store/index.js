import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';

import Reducers from './reducers';

const ReduxStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        Reducers,
        composeEnhancers(applyMiddleware(promiseMiddleware))
    );

    return store;
}

export default ReduxStore;