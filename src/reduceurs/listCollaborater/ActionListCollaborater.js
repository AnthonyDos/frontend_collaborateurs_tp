import * as ActionTypesListCollaborater from "./ActionTypesListCollaborater";

export const listCollaboraterAction = (listCollaborater) => {
    return {
        type: ActionTypesListCollaborater.GET_LIST_COLLABORATER,
        payload: listCollaborater
    }
}

export const deleteCollaboratorAction = (id) => {
    return { 
        type: ActionTypesListCollaborater.DELETE_COLLABORATOR,
        payload: id
    }
}