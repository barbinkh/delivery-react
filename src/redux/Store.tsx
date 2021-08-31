import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import { loginReducer } from './reducers/LoginReducer'
import { appReducer } from './reducers/AppReducer'
import { signupReducer } from './reducers/SignUpReducer'
import { foodProviderReducer } from './reducers/FoodProviderReducer'


const rootReducer = combineReducers(
    { login: loginReducer, signup: signupReducer, app: appReducer, foodProvider: foodProviderReducer }
)
const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk,
        reduxLogger
    )
));

export default store;