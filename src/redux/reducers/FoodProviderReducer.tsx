import { ETABLISHMENT_FAILURE, ETABLISHMENT_REQUEST, ETABLISHMENT_SUCCESS } from "../constants/Constants"

const initialState = {

}

export const foodProviderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ETABLISHMENT_REQUEST:
            return {
                ...state,
                loginData: action.payload
            }
        case ETABLISHMENT_SUCCESS:
            return {
                ...state,
                tokenData: action.payload,
                success: true
            }
        case ETABLISHMENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                success: false
            }
        default:
            return state
    }
}
