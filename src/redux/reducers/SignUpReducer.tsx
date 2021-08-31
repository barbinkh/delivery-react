
import { setAuthToken } from "../../data/local/storage/AsyncStorage";
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../constants/Constants";


const initialState = {
    signupData: null,
    registerData: null,
    error: null,
    success: false
}

export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                signupData: action.payload
            }
        case SIGNUP_SUCCESS:
            setAuthToken(action.payload.access_token)
            return {
                ...state,
                registerData: action.payload,
                success: true
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                error: action.payload,
                success: false
            }
        default:
            return state
    }
}

