import * as ActionTypesAuth from "./ActionTypesAuth";

export const loginAction = (userDetailsAuth) => {
    console.log(5)
    console.log(userDetailsAuth)
    return {
        type: ActionTypesAuth.LOGIN_SUCCESS,
        payload: userDetailsAuth
    }
}