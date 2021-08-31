
import API from "../../data/api/ApiConfig"
import { ILoginModel } from "../../data/api/auth/ILoginModel"
import { ITokenModel } from "../../data/api/auth/ITokenModel"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants/Constants"


export const loginActions = {
    request: (user: ILoginModel) => ({ type: LOGIN_REQUEST, payload: user }),
    success: (token: ITokenModel) => ({ type: LOGIN_SUCCESS, payload: token }),
    failure: (error: any) => ({ type: LOGIN_FAILURE, payload: error }),
}

export function login(username, password) {
    return dispatch => {
        dispatch(loginActions.request({ username, password }))
        try {
            const qs = require('qs');
            API.post('v1/o/token/',
                qs.stringify({
                    "username": username,
                    "password": password,
                    "grant_type": 'password',
                })
            ).then(function (response) {
                dispatch(loginActions.success(response.data))
            }).catch(function (error) {
                dispatch(loginActions.failure(error.response))
            })
        } catch (error) {
            dispatch(loginActions.failure(error))
        }
    }
}