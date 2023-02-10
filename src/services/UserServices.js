import axios from "axios";
import { BASE_URL } from "../config/config_api/ApiUrlUser";
import * as CALL from "../config/config_api/ApiUrlUser";
import { ConfigHeader } from "../config/config_headers/ConfigHeaders";
import { userIdAction } from "../reduceurs/user/ActionUser";
import { listCollaboraterAction } from "../reduceurs/listCollaborater/ActionListCollaborater";
import { ROUTE_LIST_COLLABORATER } from "../config/config_routes/RoutesClient";



export const getUserService = (userId, dispatch) => {

    axios.get(BASE_URL + CALL.API_URL_GET_BY_USER_ID + userId, { headers: ConfigHeader()})
    .then((response)=> {
        const userDetails = response?.data?.result
        dispatch(userIdAction(userDetails))
        localStorage.setItem("user", JSON.stringify(userDetails))
    })
    .catch((error)=> {
        console.log({error : error})
    })
}

export const getListCollaboratorService = (dispatch) => {

    axios.get(BASE_URL + CALL.API_URL_GET_ALL_USER, { headers: ConfigHeader()})
    .then((response)=> {
        const listCollaborater = response?.data?.result;
        localStorage.setItem("listCollaborator", JSON.stringify(listCollaborater));
        dispatch(listCollaboraterAction(listCollaborater))
        console.log(response.data.result[0])
        
    })
    .catch((error) => {
        //setErrorListCollaborater(error.response.data.message)
        console.log({error : error})
    })
}

export const updateCollaboratorService = (collaborator, userId) => {
    console.log(collaborator)
    axios.put(BASE_URL + CALL.API_URL_UPDATE_USER + userId,collaborator, { headers: ConfigHeader()})
    .then((response)=> {
        console.log(response)
        //navigate(ROUTE_LIST_COLLABORATER);
        return response;
    })
    .catch((error)=> {
        console.log(collaborator)
        console.log({error: error})
    })
}

export const deleteCollaborateurService = (userId, dispatch) => {

    axios.delete(BASE_URL + CALL.API_URL_DELETE_USER + userId,{ headers: ConfigHeader()})
    .then((response)=> {
        getListCollaboratorService()
        console.log(response)
        dispatch(actionErrorMessageGetAllCommandByIdClientAdmin(userId))
    })
    .catch((error)=> {
        console.log(error)
    })
}