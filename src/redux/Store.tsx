import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import {loginReducer} from './reducers/LoginReducer'


const rootReducer = combineReducers(
    { login: loginReducer }
)
const store = createStore(rootReducer,     compose(
        applyMiddleware(
            thunk,
            reduxLogger
        )
    ));

export default store;