import {useEffect,useState} from "react"
import ProjectService from "../../utils/service/projectservice"


import { useParams } from "react-router";


import {ProjectAxios } from "../../utils/apis/Stat";

export default function UpdateProject() {
    const {id}=useParams();
     const [nom,setNom]=useState("")
     const [repos,setRepos]=useState("")
     const [delai,setDelai]=useState("")

    useEffect(()=>{
        const fetchdata=async()=>{
            const project=await ProjectAxios.get(`/${id}`);
            setNom(project.data[0].nom)
            setRepos(project.data[0].repos)
            setDelai(project.data[0].delai)
        }
        fetchdata();

    },[id])
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            await ProjectService.UpdateProject(nom,repos,delai,id);
            
        } catch (error) {
            console.log(error);
        }  
    }

    return (
        <>
        <div className = "container mx-auto px-4 h-full" >
            <div className = "flex content-center items-center justify-center h-full" >
                <div className = "w-full lg:w-6/12 px-4" >
                    <div className = "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0" >
                        <div className = "rounded-t mb-0 px-6 py-6" >
                            <div className = "text-center mb-3" >
                                <h6 className = "text-blueGray-500 text-sm font-bold" >Update Projet</h6>
                                <h1 className="text-teal-500 text-sm font-bold">{nom}</h1>
                            </div> 
                            
                        </div> 
                        <div className = "flex-auto px-4 lg:px-10 py-10 pt-0" >
                            <form action="">
                            <div className = "relative w-full mb-3" >
                                    <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "nom" >Nom du projet </label> 
                                    <input type = "text" id="nom"  value={nom} onChange={e =>setNom(e.target.value)} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "nom du projet"/>
                                </div>
                                <div className = "relative w-full mb-3" >
                                    <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "repos" >lien github </label> 
                                    <input type = "text" id="repos"  value={repos} onChange={e =>setRepos(e.target.value)}  className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "lien github" />
                                </div>
                                <div className = "relative w-full mb-3" >
                                    <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "delai" >Delai du projet</label> 
                                    <input type = "number" id="delai"  value={delai} onChange={e =>setDelai(e.target.value)}  className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "delai de votre projet" />
                                </div>
                                <div className = "text-center mt-6" >
                                    <button onClick={handleSubmit} type="submit" className = "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" >Update</button> 
                                </div>
                                
                            </form> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </>
    );
}