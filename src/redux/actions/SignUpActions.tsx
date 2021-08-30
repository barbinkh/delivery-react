import { API } from "../../data/api/ApiConfig";
import { ISignUpRequestModel } from "../../data/api/auth/models/ISignUpRequestModel";
import { ISignUpResponseModel } from "../../data/api/auth/models/ISignUpResponseModel"
import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../constants/Constants";
import { appActions } from "./AppActions";


export const signupActions = {
    request: (payload: ISignUpRequestModel) => ({ type: SIGNUP_REQUEST, payload }),
    success: (payload: ISignUpResponseModel) => ({ type: SIGNUP_SUCCESS, payload }),
    failure: (error) => ({ type: SIGNUP_FAILURE, payload: error }),
}

export function signUp(data: ISignUpRequestModel) {
    return dispatch => {
        dispatch(appActions.showLoader())
        dispatch(signupActions.request(data))
        try {
            const qs = require('qs');
            API.post('v1/user/register/',
                qs.stringify({
                    "fullname": data.fullname,
                    "email": data.email,
                    "password": data.password,
                    "password2": data.confirmPassword,
                    "grant_type": 'password',
                })
            ).then(function (response) {
                dispatch(signupActions.success(response.data))
                dispatch(appActions.hideLoader())
            }).catch(function (error) {
                dispatch(signupActions.failure(error.response))
                dispatch(appActions.hideLoader())
            })
        } catch (error) {
            dispatch(signupActions.failure(error))
            dispatch(appActions.hideLoader())
        }

    }
}