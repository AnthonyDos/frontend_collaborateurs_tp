import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { errorRegexEmail, errorRegexPassword } from "../assets/utils/ErrorMessages";
import { REGEX_EMAIL, REGEX_PASSWORD, REGEX_PHONE } from "../assets/utils/Regex";
import { ROUTE_UPDATE_COLLABORATOR } from "../config/config_routes/RoutesClient";
import { updateCollaboratorService } from "../services/userServices";
import "../assets/css/formInfoCollaborator/formInfoCollaborator.css";

const FormInfoCollaborator = () => {
    const locationPath  = useLocation();
    const locationParams = useParams();
    const [ gender, setGender ] = useState("male");
    const [ category, setCategory ] = useState("Marketing");
    const [ lastname, setLastname ] = useState("");
    const [ firstname, setFirstname ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ birthdate, setBirthdate ] = useState("");
    const [ city, setCity ] = useState("");
    const [ country, setCountry ] = useState("");
    const [ photo, setPhoto ] = useState("");
    const [ disabledBtn, setDisabledBtn ] = useState(false);
    const [ errorEmail, setErrorEmail ] = useState("");
    const [ errorLastname, setErrorLastname ] = useState("");
    const [ errorFirstname, setErrorFirstname ] = useState("");
    const [ errorPassword, setErrorPassword ] = useState("");
    const [ errorConfirmPassword, setErrorConfirmPassword ] = useState("");
    const [ errorPhone, setErrorPhone ] = useState("");
    const [ errorCity, setErrorCity ] = useState("");
    const [ errorCountry, setErrorCountry ] = useState("");
 
    useEffect(()=> {
        if (!REGEX_PASSWORD.test(password) || 
            !REGEX_EMAIL.test(email) || 
            lastname.length > 1 && lastname.length < 4 ||
            firstname.length > 1 && firstname.length < 4 ||
            confirmPassword !== password ||
            !REGEX_PHONE.test(phone) ||
            city.length > 1 && city.length < 4 ||
            country.length > 1 && country.length < 4 

        ) {
            setDisabledBtn(true)
        }
        if (lastname.length > 1 && lastname.length < 4) {
            setErrorLastname("Veuillez remplir le champs nom")
        }else {
            setErrorLastname("");
        }
        if (firstname.length > 1 && firstname.length < 4) {
            setErrorFirstname("Veuillez remplir le champs prénom")
        }else {
            setErrorFirstname("");
        }

        if (!REGEX_EMAIL.test(email)) {
            setErrorEmail(errorRegexEmail)
        }
        if (email.length < 1 || REGEX_EMAIL.test(email)) {
            setErrorEmail(" ")
        }

        if (password.length > 1 || !REGEX_PASSWORD.test(password)) {
            setErrorPassword(errorRegexPassword)
        }
        if (password.length < 1 || REGEX_PASSWORD.test(password)) {
            setErrorPassword(" ")
        }

        if (confirmPassword !== password) {
            setErrorConfirmPassword("la confirmation du mot de passe n'est pas identique au mot de passe")
        }
        if (confirmPassword.length < 1 || confirmPassword === password) {
            setErrorConfirmPassword(" ")
        }

        if (phone.length > 1 || !REGEX_PHONE.test(phone)) {
            setErrorPhone("le format 00-00-00-00-00 n'est pas respecté")
        }
        if (phone.length < 1 || REGEX_PHONE.test(phone)){
            setErrorPhone(" ")
        }

        if (city.length > 1 && city.length < 4) {
            setErrorCity("Veuillez remplir le champs ville")
        }else {
            setErrorCity("");
        }

        if (country.length > 1 && country.length < 4) {
            setErrorCountry("Veuillez remplir le champs prénom")
        }else {
            setErrorCountry("");
        }
        
        if (REGEX_EMAIL.test(email) && 
            REGEX_PASSWORD.test(password) &&
            REGEX_PHONE.test(phone) &&
            lastname.length > 3 &&
            firstname.length > 3 &&
            confirmPassword === password &&
            city.length > 4 &&
            country.length > 4 
        ) {
            setDisabledBtn(false)
        }
    }, [disabledBtn, gender, category,email, password, confirmPassword, lastname, firstname, phone, birthdate, city, country, photo])

    console.log(locationPath.pathname)
    const collaborator = {
        gender: gender,
        category: category,
        lastname: lastname,
        firstname: firstname,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        phone: phone,
        birthdate: birthdate,
        city: city,
        country: country,
        photo: photo
    }

    
    console.log(locationParams)
    
    const HandleUpdate = (e) => {
        const userId = localStorage.getItem("id")
        console.log(collaborator)
        e.preventDefault();     
        updateCollaboratorService(collaborator, userId)
    }
    const HandleAdd = (e) => {
        e.preventDefault();
    }


    return(
        <form className="container_form">
            <div className="section_data_select">
                <p className="attribut_name">*Civilité</p>
                <select 
                    className="input_data_select"
                    onChange={(e)=> (setGender(e.target.value))} 
                    defaultValue={"male"}
                >
                    <option value="male">Homme</option>
                    <option value="female">Femme</option>
                </select>
            </div>
            <div className="section_data_select">
                <p className="attribut_name">*Catégorie</p>
                <select 
                    className="input_data_select"
                    onChange={(e)=> (setCategory(e.target.value))} 
                    defaultValue={"Marketing"}
                >
                    <option value="Marketing">Marketing</option>
                    <option value="Technique">Technique</option>
                    <option value="Client">Client</option>
                </select>
            </div>
            <div className="section_data">
                <p className="attribut_name">*Nom :</p>
                <input 
                    className="input_data"
                    type="text" 
                    value={lastname}
                    name="lastname"
                    onChange={(e)=> (setLastname(e.target.value))} 
                    required />
            </div>
            <p className="error">{errorLastname}</p>
            <div className="section_data">
                <p className="attribut_name">*Prénom :</p>
                <input 
                    className="input_data"
                    type="text" 
                    value={firstname} 
                    onChange={(e)=> (setFirstname(e.target.value))}
                    required
                />
            </div>
            <p className="error">{errorFirstname}</p>
            <div className="section_data">
                <p className="attribut_name">*Email :</p>
                <input 
                    className="input_data"
                    type="email" 
                    value={email}
                    onChange={(e)=> (setEmail(e.target.value))}
                    required
                />
            </div>
            <p className="error">{errorEmail}</p>
            <div className="section_data">
                <p className="attribut_name">Mot de passe :</p>
                <input 
                    className="input_data"
                    type="password" 
                    value={password} 
                    onChange={(e)=> (setPassword(e.target.value))}
                    required
                />
            </div>
            <p className="error">{errorPassword}</p>
            <div className="section_data">
                <p className="attribut_name">Confirmation :</p>
                <input
                    className="input_data" 
                    type="password" 
                    value={confirmPassword} 
                    onChange={(e)=> (setConfirmPassword(e.target.value))}
                    required
                />
            </div>
            <p className="error">{errorConfirmPassword}</p>
            <div className="section_data">
                <p className="attribut_name">*Téléphone :</p>
                <input
                    className="input_data" 
                    type="text"
                    value={phone} 
                    onChange={(e)=> (setPhone(e.target.value))}
                    required
                />
            </div>
            <p className="error">{errorPhone}</p>
            <div className="section_data_date">
                <p className="attribut_name">*Date de naissance :</p>
                <input 
                    className="input_data_date"
                    type="date" 
                    value={birthdate}
                    onChange={(e)=> (setBirthdate(e.target.value))}
                />
            </div>
            <div className="section_data"> 
                <p className="attribut_name">*Ville :</p>
                <input 
                    className="input_data"
                    type="text" 
                    value={city} 
                    onChange={(e)=> (setCity(e.target.value))}
                    required
                />
            </div>
            <p className="error">{errorCity}</p>
            <div className="section_data">
                <p className="attribut_name">*Pays :</p>
                <input 
                    className="input_data"
                    type="text" 
                    value={country} 
                    onChange={(e)=> (setCountry(e.target.value))}
                    required
                />
            </div>
            <p className="error">{errorCountry}</p>
            <div className="section_data">
                <p className="attribut_name">URL de la photo :</p>
                <input 
                    className="input_data"
                    type="text" 
                    value={photo} 
                    onChange={(e)=> (setPhoto(e.target.value))}
                />
            </div>
           {

            locationPath.pathname === ROUTE_UPDATE_COLLABORATOR + locationParams.userId ?
            <button 
                className="btn_info_collab"
                disabled={disabledBtn} 
                onClick={(e)=> HandleUpdate(e)}
            >
                <p>MODIFIER</p>
            </button> :
            <button 
                className="btn_info_collab"
                disabled={disabledBtn} 
                onClick={(e)=> HandleAdd(e)}
            >
                <p>AJOUTER</p>
            </button>
           }
        </form>
    )
}

export default FormInfoCollaborator;