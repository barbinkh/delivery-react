import { API } from "../../data/api/ApiConfig";
import { SignUpRequestModel } from "../../data/api/auth/models/SignUpRequestModel";
import { SignUpResponseModel } from "../../data/api/auth/models/SignUpResponseModel"
import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../constants/Constants";
import { appActions } from "./AppActions";


export const signupActions = {
    request: (payload: SignUpRequestModel) => ({ type: SIGNUP_REQUEST, payload }),
    success: (payload: SignUpResponseModel) => ({ type: SIGNUP_SUCCESS, payload }),
    failure: (error) => ({ type: SIGNUP_FAILURE, payload: error }),
}

export function signUp(data: SignUpRequestModel) {
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
                console.log(response.data)
                dispatch(signupActions.success(response.data))
                dispatch(appActions.hideLoader())
            }).catch(function (error) {
                console.log(error.response)
                dispatch(signupActions.failure(error.response))
                dispatch(appActions.hideLoader())
            })
        } catch (error) {
            dispatch(signupActions.failure(error))
            dispatch(appActions.hideLoader())
        }

    }
}