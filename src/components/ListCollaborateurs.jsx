import CardUser from "./CardUser"
import "../assets/css/listCollaborators/listCollaborators.css";
import { useEffect, useState } from "react";

const ListCollaborateurs = () => {
    const [ collaborators, setCollaborators ] = useState([])
    const [ filterData, setFilterData ] = useState([]);
    const [ queryCollaborator, setQueryCollaborator ] = useState("");
    const [ typeSearch, setTypeSearch ] = useState("");

    useEffect(()=> {
        const getUserData = async() => {
            const data = JSON.parse(localStorage.getItem("listCollaborator"))
            setCollaborators(data)
            setFilterData(data)
        }
        getUserData()
    },[])

    const HandleSearch = (e) => {
        const getSearch = e.target.value;
        
        if (getSearch.length > 0) {
            console.log(typeSearch)
            const searchData = collaborators.filter((collaborator)=> 
                
                collaborator.firstname.toLowerCase().includes(getSearch)); 
                console.log(searchData)
            setCollaborators(searchData);
        }else {
            setCollaborators(filterData);
        }
        setQueryCollaborator(getSearch)
    }

    const HandleSearchLastname = (e) => {
        const filterSearchType = e.target.value;
        console.log(filterSearchType)
        setTypeSearch(filterSearchType)
    }

    return(
        <> 
            <div>
                <form>
                    <input type="search" value={queryCollaborator} onChange={(e)=> HandleSearch(e)} placeholder="Recherche..."/>
                </form>
                <p>Recherche par nom :</p>
                <select 
                    onChange={(e)=> HandleSearchLastname(e)}
                    defaultValue={"nom"}
                >
                    <option value="nom">Nom</option>
                    <option value="categorie">Catégorie</option>
                    <option value="localisation">Localisation</option>
                </select>
            </div>
            <div className="container_list_collaborators">
                {
                    collaborators.map((collaborator, index) => {
                        return (
                            <div className="list_collaborators">
                                <CardUser key={index} collaborator={collaborator}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ListCollaborateurs;