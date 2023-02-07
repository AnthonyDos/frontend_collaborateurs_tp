import { useSelector } from "react-redux";
import { navigate } from "react-router-dom";

export const ConfigHeader = () => {
    const userDetails = useSelector(state => state?.reducerLogin)
    console.log(userDetails)
}