
import { API } from "../../data/api/ApiConfig"
import { LoginModel } from "../../data/api/auth/models/LoginModel"
import { TokenModel } from "../../data/api/auth/models/TokenModel"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants/Constants"

export const loginActions = {
    request: (user: LoginModel) => ({ type: LOGIN_REQUEST, payload: user }),
    success: (token: TokenModel) => ({ type: LOGIN_SUCCESS, payload: token }),
    failure: (error: any) => ({ type: LOGIN_FAILURE, payload: error }),
}

export function login(username, password) {
    return async dispatch => {
        try {
            dispatch(loginActions.request({ username, password }))
            const qs = require('qs');
            API.post('v1/o/token/',
                qs.stringify({
                    "username": username,
                    "password": password,
                    "grant_type": 'password',
                })
            ).then(function (response) {
                console.log(response.data)
                dispatch(loginActions.success(response.data))
            }).catch(function (error) {
                console.log(error.response)
                dispatch(loginActions.failure(error.response))
            })
        } catch (error) {
            dispatch(loginActions.failure(error))
        }
    }
}