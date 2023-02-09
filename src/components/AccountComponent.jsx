import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserService } from "../services/userServices";
import CardUser from "./CardUser";
import "../assets/css/account/account.css";

const AccountComponent = () => {
    
    const dispatch = useDispatch();
    const storageUserDetails = localStorage.getItem("userDetails");
    const userDetails= JSON.parse(storageUserDetails);
    getUserService(userDetails?.userId, dispatch);
    const storeCollab = useSelector(state => state?.reducerListCollaborater?.state) 
    const [ randomCollaborator, setRandomCollaborator] = useState("");

    const RandomCollaborater = () => {
        if (storeCollab) {
            setRandomCollaborator(Math.floor(Math.random() * storeCollab.length))
        }
        const collaborator = storeCollab?.[randomCollaborator - 1]   
        return (
            <div className="card_user">
                <CardUser collaborator={collaborator} />
            </div>
        );
    }
    
   
    return(
        <div>
            <div>
                <h1>Bienvenue sur l'intranet</h1>
                <p>La plate-forme de l'entreprise qui vous permet de retrouver tous vos collaborateurs.</p>
                <p>Avez-vous dit bonjour à :</p>
            </div>
            <RandomCollaborater />
            <button className="btn_hello" onClick={()=>RandomCollaborater()}>
                <p>DIRE BONJOUR À QUELQU'UN D'AUTRE</p>
            </button>
        </div>
    )
}


export default AccountComponent;