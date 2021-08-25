import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import {loginReducer} from './reducers/LoginReducer'
import { appReducer } from './reducers/AppReducer'


const rootReducer = combineReducers(
    { login: loginReducer, app: appReducer }
)
const store = createStore(rootReducer,     compose(
        applyMiddleware(
            thunk,
            reduxLogger
        )
    ));

export default store;