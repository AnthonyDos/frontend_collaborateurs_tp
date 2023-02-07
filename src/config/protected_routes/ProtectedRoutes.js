import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { ROUTE_HOME } from "../config_routes/RoutesClient";


const ProtectedRoutes = ({ children }) => {
    const navigate = useNavigate();
    const { isLoggedIn, user } = useSelector(state => state?.reducerLogin);
    const storageUserDetails = localStorage.getItem("userDetails");
    const storageIsLoggedIn = localStorage.getItem("isLoggedIn");
    const storageToken= JSON.parse(storageUserDetails)

    if (isLoggedIn === false && !user.token && !storageToken?.token && storageIsLoggedIn != true) {
        useEffect(()=>{
            navigate(ROUTE_HOME)
        }, navigate)
    }
    return children;
}

export default ProtectedRoutes;