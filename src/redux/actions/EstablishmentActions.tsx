import { API } from "../../data/api/ApiConfig";
import { IFoodProviderModel } from "../../data/api/auth/models/IFoodProvideModel";
import { ETABLISHMENT_FAILURE, ETABLISHMENT_REQUEST, ETABLISHMENT_SUCCESS } from "../constants/Constants";
import { appActions } from "./AppActions";


export const establishmentActions = {
    request: () => ({ type: ETABLISHMENT_REQUEST }),
    success: (providers: IFoodProviderModel) => ({ type: ETABLISHMENT_SUCCESS, payload: providers }),
    failure: (error: any) => ({ type: ETABLISHMENT_FAILURE, payload: error }),
}

export function getEstablishments(page: number) {
    return async dispatch => {
        dispatch(appActions.showLoader())
        dispatch(establishmentActions.request())
        try {
            const qs = require('qs');
            API.get('v1/establishments/',
                // qs.stringify({
                //     "fullname": data.fullname,
                //     "email": data.email,
                //     "password": data.password,
                //     "password2": data.confirmPassword,
                //     "grant_type": 'password',
                // })
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