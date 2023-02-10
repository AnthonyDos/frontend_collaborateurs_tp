import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTE_UPDATE_COLLABORATOR, ROUTE_LIST_COLLABORATER } from "../config/config_routes/RoutesClient";
import { deleteCollaborateurService, getListCollaboratorService } from "../services/userServices";
import "../assets/css/cardUser/cardUser.css";

const ButtonAdminAddUpdate = (props) => {
    const { userId } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const idUser = () => {
        localStorage.setItem("id", userId)
    }
    const deleteCollaborator = () => {
        deleteCollaborateurService(userId, dispatch)
    }
    return(
        <div className="container_btn_update_delete">
            <button className="btn_update_delete" onClick={()=> {navigate(ROUTE_UPDATE_COLLABORATOR + userId), idUser()}}>
                <p>MODIFIER</p>
            </button>
            <button className="btn_update_delete" onClick={()=> {navigate(ROUTE_LIST_COLLABORATER), deleteCollaborator()}}>
                SUPPRIMER
            </button>
        </div>
    )
}

export default ButtonAdminAddUpdate;