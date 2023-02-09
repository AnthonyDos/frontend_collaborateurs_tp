import { useNavigate } from "react-router-dom";
import { ROUTE_HOME } from "../config_routes/RoutesClient";

export const ConfigHeader = () => {
    const navigate = useNavigate();
    const storageUserDetails = localStorage.getItem("userDetails");
    const storageToken= JSON.parse(storageUserDetails);
    console.log(storageToken.token)
    if (!storageToken?.token) {
        navigate(ROUTE_HOME)
    }
    return {
        "Content-type": "application/json",
        Authorization: `Bearer ${storageToken?.token}`, 
    }
}