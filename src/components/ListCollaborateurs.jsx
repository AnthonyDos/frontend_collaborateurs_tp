import CardUser from "./CardUser"
import "../assets/css/listCollaborators/listCollaborators.css";
import { useEffect, useState } from "react";
import ButtonAdminAddUpdate from "./ButtonAdminAddUpdate";

const ListCollaborateurs = () => {
    const [ collaborators, setCollaborators ] = useState([])
    const [ filterData, setFilterData ] = useState([]);
    const [ queryCollaborator, setQueryCollaborator ] = useState("");
    const [ typeSearch, setTypeSearch ] = useState("choice");
    const [ categorySearch, setCategorySearch ] = useState("categorie");
    const authorizationAdmin = JSON.parse(localStorage.getItem("userDetails"));

    useEffect(()=> {
        const getUserData = async() => {
            const data = JSON.parse(localStorage.getItem("listCollaborator"))
            setCollaborators(data)
            setFilterData(data)
        }
        getUserData()
    },[typeSearch, categorySearch])    

    const HandleSearchType = (e) => {
        const filterSearchType = e.target.value;
        setTypeSearch(filterSearchType)
    }

    const HandleSearchCategorie = (e) => {
        const filterSearchCategory = e.target.value;
        setCategorySearch(filterSearchCategory)
    }

    const HandleSearch = (e) => {

        const getSearch = e.target.value;
        
        if (getSearch.length > 0 && typeSearch.includes("choice") && categorySearch.includes("categorie")) {

            const searchData = collaborators.filter((collaborator)=> 
                collaborator.lastname.toLowerCase().includes(getSearch)); 
            setCollaborators(searchData);

        }else if (getSearch.length > 0 && typeSearch.includes("lastname") && categorySearch.includes("categorie")) {
    
            const searchData = collaborators.filter((collaborator)=> 
                collaborator.lastname.toLowerCase().includes(getSearch)); 
            setCollaborators(searchData);

        }else if (getSearch.length > 0 && typeSearch.includes("city") && categorySearch.includes("categorie")) {

            const searchData = collaborators.filter((collaborator)=> 
                collaborator.city.toLowerCase().includes(getSearch)); 
            setCollaborators(searchData);

        }else if (getSearch.length > 0 && typeSearch.includes("lastname") && categorySearch.includes("Marketing")) {

            const searchData = collaborators.filter((collaborator)=> 
                collaborator.category.includes(categorySearch) && collaborator.lastname.toLowerCase().includes(getSearch)) 
            setCollaborators(searchData);

        }else if (getSearch.length > 0 && typeSearch.includes("lastname") && categorySearch.includes("Technique")) {

            const searchData = collaborators.filter((collaborator)=> 
                collaborator.category.includes(categorySearch) && collaborator.lastname.toLowerCase().includes(getSearch)) 
            setCollaborators(searchData);

        }else if (getSearch.length > 0 && typeSearch.includes("lastname") && categorySearch.includes("Client")) {

            const searchData = collaborators.filter((collaborator)=> 
                collaborator.category.includes(categorySearch) && collaborator.lastname.toLowerCase().includes(getSearch)) 
            setCollaborators(searchData);

        }else if (getSearch.length > 0 && typeSearch.includes("city") && categorySearch.includes("Client")) {

            const searchData = collaborators.filter((collaborator)=> 
                collaborator.category.includes(categorySearch) && collaborator.city.toLowerCase().includes(getSearch)) 
            setCollaborators(searchData);

        }else if (getSearch.length > 0 && typeSearch.includes("city") && categorySearch.includes("Technique")) {

            const searchData = collaborators.filter((collaborator)=> 
                collaborator.category.includes(categorySearch) && collaborator.city.toLowerCase().includes(getSearch)) 
            setCollaborators(searchData);

        }else if (getSearch.length > 0 && typeSearch.includes("city") && categorySearch.includes("Marketing")) {

            const searchData = collaborators.filter((collaborator)=> 
                collaborator.category.includes(categorySearch) && collaborator.city.toLowerCase().includes(getSearch)) 
            setCollaborators(searchData);

        }else{
            setCollaborators(filterData);
        }
        setQueryCollaborator(getSearch)
    }

    return(
        <> 
            <div className="container-search">
                <form>
                    <input type="search" value={queryCollaborator} onChange={(e)=> HandleSearch(e)} placeholder="Recherche..."/>
                </form>
                <p>Recherche par nom :</p>
                <select 
                    onChange={(e)=> HandleSearchType(e)}
                    defaultValue={"choice"}
                >
                    <option value="choice">choix</option>
                    <option value="lastname">Nom</option>
                    <option value="city">Localisation</option>
                </select>
                <p>Catégorie</p>
                <select 
                    onChange={(e)=> HandleSearchCategorie(e)} 
                    defaultValue="categorie"
                >
                    <option value="categorie">catégories</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Technique">Technique</option>
                    <option value="Client">Client</option>
                </select>
            </div>
            <div className="container_list_collaborators">
                {
                    collaborators.map((collaborator, index) => {
                        return (
                            <div key={index} className="list_collaborators">
                                <CardUser  collaborator={collaborator}/>
                                { authorizationAdmin.authorization === 1 ? <ButtonAdminAddUpdate userId={collaborator.id}/> : null }
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ListCollaborateurs;