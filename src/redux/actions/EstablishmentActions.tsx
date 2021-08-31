import  API  from "../../data/api/ApiConfig";
import { BasePaginationResponse } from "../../data/api/base/IBasePaginationResponse";
import { IFoodProviderModel } from "../../data/api/foodprovider/IFoodProvideModel";
import { ETABLISHMENT_FAILURE, ETABLISHMENT_REQUEST, ETABLISHMENT_SUCCESS } from "../constants/Constants";
import { appActions } from "./AppActions";


export const establishmentActions = {
    request: () => ({ type: ETABLISHMENT_REQUEST }),
    success: (providers: BasePaginationResponse<IFoodProviderModel>) => ({ type: ETABLISHMENT_SUCCESS, payload: providers }),
    failure: (error: any) => ({ type: ETABLISHMENT_FAILURE, payload: error }),
}

export function getEstablishments(page: number) {
    return async dispatch => {
        dispatch(appActions.showLoader())
        dispatch(establishmentActions.request())
        try {
            API.get('v1/establishments/'
            ).then(function (response) {
                dispatch(establishmentActions.success(response.data))
                dispatch(appActions.hideLoader())
            }).catch(function (error) {
                dispatch(establishmentActions.failure(error.response))
                dispatch(appActions.hideLoader())
            })
        } catch (error) {
            dispatch(establishmentActions.failure(error))
            dispatch(appActions.hideLoader())
        }
    }
}