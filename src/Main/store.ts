import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export const history = createHistory();

const middleware = routerMiddleware(history);

const __ENV__ = process.env.NODE_ENV || 'development';

const options = {
    maxAge: 200,
};
const composeEnhancers = composeWithDevTools(options);

let store: Store<{}>;
if (__ENV__ === 'development') {
    store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(sagaMiddleware, middleware))
    );
} else {
    store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware, middleware)
    );
}

sagaMiddleware.run(rootSaga);

export default store;
