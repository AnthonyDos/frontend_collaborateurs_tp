import * as ActionTypesUser from "./ActionTypesUser";

const initialState = {}

export default function reducerUserId(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ActionTypesUser.GET_USER_ID:
            console.log(payload)
            return {
                ...state,
                state: payload
            }
    
        default:
            return state;
    }
}