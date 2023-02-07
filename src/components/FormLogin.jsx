import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { errorRegexEmail, errorRegexPassword } from "../assets/utils/ErrorMessages";
import { REGEX_EMAIL, REGEX_PASSWORD } from "../assets/utils/Regex";
import { loginService } from "../services/userServices";

const FormLogin = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ errorEmail, setErrorEmail ] = useState("");
    const [ errorPassword, setErrorPassword ] = useState("");
    const [ disabledBtn, setDisabledBtn ] = useState(false);
    const [ errorLogin, setErrorLogin ] = useState("");

    useEffect(()=> {
        if (!REGEX_PASSWORD.test(password) || !REGEX_EMAIL.test(email) ) {
            setDisabledBtn(true)
        }
        if (!REGEX_EMAIL.test(email)) {
            setErrorEmail(errorRegexEmail)
            setDisabledBtn(true)
        }
        if (email.length < 1 || REGEX_EMAIL.test(email)) {
            setErrorEmail(" ")
        }
        if (!REGEX_PASSWORD.test(password)) {
            setErrorPassword(errorRegexPassword)
            setDisabledBtn(true)
        }
        
        if (password.length < 1 || REGEX_PASSWORD.test(password)) {
            setErrorPassword(" ")
        }
        if (REGEX_EMAIL.test(email) && email.length > 8 && REGEX_PASSWORD.test(password)) {
            setDisabledBtn(false)
        }
        
    },[email, password, disabledBtn, errorLogin])

    const handleSubmit = (e) => {
        e.preventDefault();
        loginService(email, password, setErrorLogin, dispatch, navigate)
    
    }
    return(
        <form>
            <div>
                <h1>Connexion</h1>
                <span></span>
                <p>Pour vous connecter à l'intranet, entrez votre identifiant et mot de passe.</p>
            </div>
            <div>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input 
                        id="email"
                        type="email" 
                        value={email}
                        name="email"
                        onChange={(e)=> (setEmail(e.target.value))} 
                        required
                    />
                    <span>{errorEmail}</span>
                </div>
                <div>
                    <label htmlFor="password">Mot de passe :</label>
                    <input 
                        id="password"
                        type="password" 
                        value={password}
                        name="password"
                        onChange={(e)=> (setPassword(e.target.value))} 
                        required
                    />
                    <span>{errorPassword}</span>
                </div>
            </div>
            <button 
                disabled={disabledBtn}
                onClick={(e)=> handleSubmit(e)}
            >
                    <h2>CONNEXION</h2>
            </button>
            <span>{errorLogin}</span>
        </form>
    )
}
export default FormLogin;