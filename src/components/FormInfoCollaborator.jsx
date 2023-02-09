import { useEffect, useState } from "react";
import { errorRegexEmail, errorRegexPassword } from "../assets/utils/ErrorMessages";
import { REGEX_EMAIL, REGEX_PASSWORD } from "../assets/utils/Regex";


const FormInfoCollaborator = () => {
    const [ gender, setGender ] = useState("");
    const [ category, setCategory ] = useState("");
    const [ lastname, setLastname ] = useState("");
    const [ firstname, setFirstname ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ birthdate, setBirthdate ] = useState("");
    const [ city, setCity ] = useState("");
    const [ Country, setCountry ] = useState("");
    const [ photo, setPhoto ] = useState("");
    const [ disabled, setDisabled ] = useState(true);
    const [ error, setError ] = useState("");
   
 
    useEffect(()=> {
        if (!REGEX_PASSWORD.test(password) || !REGEX_EMAIL.test(email) ) {
            setDisabled(true)
        }
        if (!REGEX_EMAIL.test(email)) {
            setError(errorRegexEmail)
            setDisabled(true)
        }
        if (email.length < 1 || REGEX_EMAIL.test(email)) {
            setError(" ")
        }
        if (!REGEX_PASSWORD.test(password)) {
            setError(errorRegexPassword)
            setDisabled(true)
        }
        
        if (password.length < 1 || REGEX_PASSWORD.test(password)) {
            setError(" ")
        }
        if (lastname > 1 && lastname < 4) {
            setError("Veuillez remplir le champs nom")
        }
        if (REGEX_EMAIL.test(email) && email.length > 8 && REGEX_PASSWORD.test(password)) {
            setDisabled(false)
        }
    }, [email, password, confirmPassword, lastname])

    const HandleUpdate = (e) => {
        e.preventDedault();
    }

    console.log(lastname)
    return(
        <form>
            <div>
                <p>*Civilité</p>
                <select 
                    defaultValue={"male"}
                >
                    <option value="male">Homme</option>
                    <option value="female">Femme</option>
                </select>
            </div>
            <div>
                <p>*Catégorie</p>
                <select 
                    defaultValue={"Marketing"}
                >
                    <option value="Marketing">Marketing</option>
                    <option value="Technique">Technique</option>
                    <option value="Client">Client</option>
                </select>
            </div>
            <div>
                <p>*Nom :</p>
                <input 
                    type="text" 
                    value={lastname}
                    name="lastname"
                    onChange={(e)=> (setLastname(e.target.value))} 
                    required />
            </div>
            { lastname == null ? <span>{error}</span> : null}
            <div>
                <p>*Prénom :</p>
                <input type="text" value="" />
            </div>
            <div>
                <p>*Email :</p>
                <input type="email" value="" />
            </div>
            <div>
                <p>Mot de passe :</p>
                <input type="password" value="" />
            </div>
            <div>
                <p>Confirmation :</p>
                <input type="password" value="" />
            </div>
            <div>
                <p>*Téléphone :</p>
                <input type="tel" value="" />
            </div>
            <div>
                <p>*Date de naissance :</p>
                <input type="date" value="" />
            </div>
            <div>
                <p>*Ville :</p>
                <input type="text" value="" />
            </div>
            <div>
                <p>*Pays :</p>
                <input type="text" value="" />
            </div>
            <div>
                <p>URL de la photo :</p>
                <input type="text" value="" />
            </div>
            <button disabled={disabled} onClick={(e)=> HandleUpdate(e)}>
                <p>MODIFIER</p>
            </button>
        </form>
    )
}

export default FormInfoCollaborator;