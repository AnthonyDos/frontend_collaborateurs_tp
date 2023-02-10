import { useLocation, useParams } from "react-router-dom";
import FormInfoCollaborator from "../components/FormInfoCollaborator";
import Header from "../components/Header";
import { ROUTE_UPDATE_COLLABORATOR } from "../config/config_routes/RoutesClient";



const FormInfoAddUpdateCollaborator = () => {
    const locationPath  = useLocation();
    const locationParams = useParams();

    return(
        <div>
            <Header />
            {
                locationPath.pathname === ROUTE_UPDATE_COLLABORATOR + locationParams.userId ?
                <h1>Modification du collaborateur {locationParams.userId}</h1>
                : <h1>Création d'un collaborateur</h1>
            }
            <FormInfoCollaborator/>
        </div>
    )
}

export default FormInfoAddUpdateCollaborator;