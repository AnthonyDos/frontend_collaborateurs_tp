import { FaNetworkWired } from "react-icons/fa";
import { MdLogin, MdLogout } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_CREATE_COLLABORATOR, ROUTE_HOME, ROUTE_LIST_COLLABORATER } from "../config/config_routes/RoutesClient";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../reduceurs/auth/ActionAuth";
import "../assets/css/header/header.css";
import { IoPersonAddSharp } from "react-icons/io5";

const Header = () => {

    const navigate = useNavigate();
    const dispatch =useDispatch();
    const userDetail = useSelector(state => state.reducerUserId.state)
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

    useEffect(()=>{
        setIsLoggedIn(localStorage.getItem("isLoggedIn"))
    },[isLoggedIn, userDetail])
    
    const ListCollaborateurs = () => {
        if (isLoggedIn) {
            return (
                <button className="btn_session" onClick={()=>(navigate(ROUTE_LIST_COLLABORATER))}>
                    <FaList/>
                    <p>Liste</p>
                </button>
            )
        }
        return null; 
    }
    const IfLogged = () => {
        if (isLoggedIn) {
            return (
                <button className="btn_session" onClick={()=> dispatch(logoutAction(), navigate(ROUTE_HOME))}>
                    <span><MdLogout /></span>
                    <p>Déconnexion</p>
                </button>
            )
        }
        return (
            <div className="btn_session_connect">
                <MdLogin />
                <p>Connexion</p>
            </div>
        )
    }
    return(
        <div className="container_header">
            <div className="header_intranet">
                <FaNetworkWired />
                <p>Intranet</p>
            </div>
            <div className="navigation">
                {
                    isLoggedIn ? <button className="btn_add" onClick={()=>navigate(ROUTE_CREATE_COLLABORATOR)}>
                        <IoPersonAddSharp />
                        <p>Ajouter</p>
                    </button> : null
                }
                <ListCollaborateurs />
                <div className="img_container">
                    {  isLoggedIn ? <img className="img" src={userDetail?.photo} alt="photo de profil" /> : null}
                </div>
                <div className="header_connexion">
                    <IfLogged />
                </div>
            </div>
        </div>
    )
}

export default Header;