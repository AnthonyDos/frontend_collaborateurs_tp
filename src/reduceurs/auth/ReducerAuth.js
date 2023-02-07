import * as ActionTypesAuth from "./ActionTypesAuth";

const initialState = {
    isLoggedIn: false,
    user: {}
}


export default function AuthUserReducer(state = initialState, action) {
    const { type, payload } = action;
    console.log(payload)
    switch (type) {
        case ActionTypesAuth.LOGIN_SUCCESS:
            localStorage.setItem("isLoggedIn", true)
            return {
                ...state,
                isLoggedIn: true,
                user: payload
            }
            
    
        default:
            return state;
    }
}