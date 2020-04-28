import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer'
import logger from 'redux-logger'

const store = createStore(
    reducer,
    compose (
    applyMiddleware(thunk, logger)
    )
);

export default store;