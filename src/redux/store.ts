import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'
import {MakeStore} from 'next-redux-wrapper'
import {rootReducer} from "./reducers/rootReducer"
import rootSaga from './sagas/rootSaga'


const sagaMiddleware = createSagaMiddleware();

const enhancer = composeWithDevTools(
    applyMiddleware(sagaMiddleware),
);

// create a makeStore function
const makeStore: MakeStore = () => {
    const store = createStore(rootReducer, enhancer);
    sagaMiddleware.run(rootSaga);
    return store
};

// export an assembled wrapper
export default makeStore;