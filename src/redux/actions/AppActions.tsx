import { HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from "../constants/Constants"


export const appActions = {
    showLoader: () => ({ type: SHOW_LOADER }),
    hideLoader: () => ({ type: HIDE_LOADER }),
    showAlert: (payload) => ({ type: SHOW_ALERT, payload }),
    hideAlert: () => ({ type: HIDE_ALERT })
}