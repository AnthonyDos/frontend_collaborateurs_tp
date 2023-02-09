import Header from "../components/Header";
import AccountComponent from "../components/AccountComponent";
import { getListCollaboratorService, getUserService } from "../services/userServices";
import { useDispatch } from "react-redux";


const Account = () => {
     const dispatch = useDispatch();
     getListCollaboratorService(dispatch)
    // const storageUserDetails = localStorage.getItem("userDetails");
    // const userDetails= JSON.parse(storageUserDetails);
    // getUserService(userDetails?.userId, dispatch);
    // console.log(userDetails)
    return(
        <div>
        <Header />
        <AccountComponent />
        </div>
    )
}

export default Account;