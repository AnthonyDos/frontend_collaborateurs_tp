import { useNavigate } from "react-router-dom";
import { ROUTE_UPDATE_COLLABORATOR } from "../config/config_routes/RoutesClient";


const ButtonAdminAddUpdate = () => {
    const navigate = useNavigate();


    return(
        <div>
            <button onClick={()=> navigate(ROUTE_UPDATE_COLLABORATOR)}>
                <p>MODIFIER</p>
            </button>
            <button onClick={()=> navigate(ROUTE_LIST_COLLABORATER)}>
                SUPPRIMER
            </button>
        </div>
    )
}

export default ButtonAdminAddUpdate;