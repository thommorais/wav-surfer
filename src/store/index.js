import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import queue from './queue'

const reducers = combineReducers({queue})

const composeEnhancers = composeWithDevTools({ trace: false, traceLimit: 250 })

export default createStore(reducers, composeEnhancers())