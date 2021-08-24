
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants/Constants";
const initialState = {
    loginData: null,
    tokenData: null,
    error: null
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loginData: action.payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                tokenData: action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

