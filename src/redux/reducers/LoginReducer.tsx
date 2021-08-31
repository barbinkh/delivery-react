
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants/Constants";
import {setAuthToken} from '../../data/local//storage/AsyncStorage'

const initialState = {
    loginData: null,
    tokenData: null,
    error: null,
    success: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loginData: action.payload
            }
        case LOGIN_SUCCESS:
            setAuthToken(action.payload.access_token)
            return {
                ...state,
                tokenData: action.payload,
                success: true
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                success: false
            }
        default:
            return state
    }
}

