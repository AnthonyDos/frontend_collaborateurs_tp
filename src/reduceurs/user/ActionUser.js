import * as ActionTypesUser from "./ActionTypesUser";

export const userIdAction = (userDetails) => {
    return {
        type: ActionTypesUser.GET_USER_ID,
        payload: userDetails
    }
}