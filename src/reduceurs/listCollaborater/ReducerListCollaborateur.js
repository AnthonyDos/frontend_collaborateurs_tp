import * as ActionTypesListCollaborater from "./ActionTypesListCollaborater";

const initialState = {};

export default function reducerListCollaborater(state= initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ActionTypesListCollaborater.GET_LIST_COLLABORATER:
        const storageListCollaborators = JSON.parse(localStorage.getItem("listCollaborator"))
        console.log(storageListCollaborators)
        console.log(payload)
        return {
            ...state,
            state: payload != null ? payload : storageListCollaborators
        }  
    
        default:
            return state;
    }
}