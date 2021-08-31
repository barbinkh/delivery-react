import { BasePaginationResponse } from "../../data/api/base/IBasePaginationResponse"
import { IFoodProviderModel } from "../../data/api/foodprovider/IFoodProvideModel"
import { ETABLISHMENT_FAILURE, ETABLISHMENT_REQUEST, ETABLISHMENT_SUCCESS } from "../constants/Constants"

const initialState: BasePaginationResponse<IFoodProviderModel> = {
    count: -1,
    next: -1,
    previous: -1,
    results: []
}

export const foodProviderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ETABLISHMENT_SUCCESS:
            return {
                ...state,
                results: action.payload.results,
            }
        case ETABLISHMENT_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}
