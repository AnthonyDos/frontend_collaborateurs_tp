import axios from "axios";
import { BASE_URL } from "../config/config_api/ApiUrlUser";
import * as CALL from "../config/config_api/ApiUrlUser";
import { ConfigHeader } from "../config/config_headers/ConfigHeaders";
import { userIdAction } from "../reduceurs/user/ActionUser";
import { listCollaboraterAction } from "../reduceurs/listCollaborater/ActionListCollaborater";



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