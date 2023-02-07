import axios from "axios";
import { BASE_URL } from "../config/config_api/ApiUrlUser";
import * as CALL from "../config/config_api/ApiUrlUser";
import { loginAction } from "../reduceurs/auth/ActionAuth";
import { ROUTE_ACCOUNT } from "../config/config_routes/RoutesClient";

export const loginService = (email, password,setErrorLogin, dispatch, navigate) => {
   
    axios.post(BASE_URL + CALL.API_URL_LOGIN_USER, {
        email: email,
        password: password
    })
    .then((response)=> {
        const access_token = response.data.token
        const userDetailsAuth = response?.data
        console.log(access_token)
        dispatch(loginAction(userDetailsAuth))
        localStorage.setItem("userDetails", JSON.stringify(userDetailsAuth))
        console.log(userDetailsAuth)
        navigate(ROUTE_ACCOUNT)
        return response
    })
    .catch((error)=> {
        setErrorLogin(error?.response?.data?.message)
    })
}