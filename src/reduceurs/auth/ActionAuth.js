import * as ActionTypesAuth from "./ActionTypesAuth";

export const loginAction = (userDetailsAuth) => {
    return {
        type: ActionTypesAuth.LOGIN_SUCCESS,
        payload: userDetailsAuth
    }
}

export const logoutAction = () => {
    return { type: ActionTypesAuth.LOGOUT_SUCCES }
}