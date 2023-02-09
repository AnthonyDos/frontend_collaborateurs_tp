import * as ActionTypesAuth from "./ActionTypesAuth";


const initialState = {
    isLoggedIn: false,
    user: {}
}


export default function AuthUserReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ActionTypesAuth.LOGIN_SUCCESS:
            localStorage.setItem("isLoggedIn", true)
            return {
                ...state,
                isLoggedIn: true,
                user: payload 
            }
            
        case ActionTypesAuth.LOGOUT_SUCCES:
            localStorage.clear();
            return state;
    
        default:
            return state;
    }
}