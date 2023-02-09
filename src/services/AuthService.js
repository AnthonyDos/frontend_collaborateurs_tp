import axios from "axios";
import { BASE_URL } from "../config/config_api/ApiUrlUser";
import * as CALL from "../config/config_api/ApiUrlUser";
import { loginAction } from "../reduceurs/auth/ActionAuth";
import { ROUTE_ACCOUNT } from "../config/config_routes/RoutesClient";
import { getListCollaboratorService } from "./userServices";


export const loginService = (email, password,setErrorLogin, dispatch, navigate) => {
   
    axios.post(BASE_URL + CALL.API_URL_LOGIN_USER, {
        email: email,
        password: password
    })
    .then((response)=> {
        const userDetailsAuth = response?.data
        dispatch(loginAction(userDetailsAuth))
        localStorage.setItem("userDetails", JSON.stringify(userDetailsAuth))
        navigate(ROUTE_ACCOUNT)
        console.log(test)
        getUserService(userDetails?.userId, dispatch);
        
        return response
    })
    .catch((error)=> {
        setErrorLogin(error?.response?.data?.message)
    })
}