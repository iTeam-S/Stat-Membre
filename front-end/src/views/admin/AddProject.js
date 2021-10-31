import React, { useContext } from "react";
import Axios from "axios"
import {useEffect,useState} from "react"
import { CritereAxios } from "apis/Stat";
import { ProjectAxios } from "apis/Stat";
import { CritereContext } from "context/CritereContext";
import { ProjectContext } from "context/ProjectContext";


export default function AddProject() {
    const {addCritere}=useContext(CritereContext)
    const {addProject}=useContext(ProjectContext)
    {/* Difficulte */}
    const [difficulte,setDifficulte]=useState("")
    const [deadline,setDeadline]=useState("")
    const [impact,setImpact]=useState("")
    const [implication,setImplication]=useState("")
    const [point_git,setPoint_git]=useState("")
    
    {/* Project */}
    const [nom,setNom]=useState("")
    const [repos,setRepos]=useState("")
    const [delai,setDelai]=useState("")
   const  handleSubmit= async (e)=>{
        e.preventDefault();
        try {
            const critere=await CritereAxios.post("/create",{
                difficulte,
                deadline,
                impact,
                implication,
                point_git
    
            });
            const project=await ProjectAxios.post("/create",{
                nom,
                repos,
                delai
            });
            console.log(project.data);
            addCritere(critere.data);
            addProject(project.data);
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
                                    <h6 className = "text-blueGray-500 text-sm font-bold" >Ajouter un Projet</h6> 
                                </div> 
                                
                            </div> 
                            <div className = "flex-auto px-4 lg:px-10 py-10 pt-0" >
                                <form action="">
                                <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "nom" >Nom du projet </label> 
                                        <input type = "text" id="nom"  value={nom} onChange={e =>setNom(e.target.value)} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "nom du projet" />
                                    </div>
                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "repos" >lien github </label> 
                                        <input type = "text" id="repos"  value={repos} onChange={e =>setRepos(e.target.value)}  className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "lien github" />
                                    </div>
                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "delai" >Delai du projet</label> 
                                        <input type = "number" id="delai"  value={delai} onChange={e =>setDelai(e.target.value)}  className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "delai de votre projet" />
                                    </div>

                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" >Impact Projet </label> 
                                        <select id="impact" value={impact} onChange={e =>setImpact(e.target.value)}  className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                            <option value="1">Debutant</option>
                                            <option value="2">Amateur</option>
                                            <option value="3">Normal</option>
                                            <option value="4">Haut Niveau</option>
                                            <option value="5">Legende</option>
                                        </select>
                                     </div>

                                     <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" >Difficulté </label> 
                                        <select id="difficulte" value={difficulte} onChange={e =>setDifficulte(e.target.value)} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                            <option value="1">Debutant</option>
                                            <option value="2">Amateur</option>
                                            <option value="3">Normal</option>
                                            <option value="4">Haut Niveau</option>
                                            <option value="5">Legende</option>
                                        </select>
                                     </div>

                                     <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "implication" >Implication </label> 
                                        <select id="implication" value={implication} onChange={e =>setImplication(e.target.value)} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                            <option value="1">Debutant</option>
                                            <option value="2">Amateur</option>
                                            <option value="3">Normal</option>
                                            <option value="4">Haut Niveau</option>
                                            <option value="5">Legende</option>
                                        </select>
                                     </div>

                                     <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2"  htmlFor = "deadline" >DeadLine </label> 
                                        <select id="deadline"  value={deadline} onChange={e =>setDeadline(e.target.value)} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                            <option value="1">Debutant</option>
                                            <option value="2">Amateur</option>
                                            <option value="3">Normal</option>
                                            <option value="4">Haut Niveau</option>
                                            <option value="5">Legende</option>
                                        </select>
                                     </div>
                                     <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2"  htmlFor = "deadline" >Point_git </label> 
                                        <select id="point_git"  value={point_git} onChange={e =>setPoint_git(e.target.value)} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                            <option value="1">Debutant</option>
                                            <option value="2">Amateur</option>
                                            <option value="3">Normal</option>
                                            <option value="4">Haut Niveau</option>
                                            <option value="5">Legende</option>
                                        </select>
                                     </div>

                                    <div className = "text-center mt-6" >
                                        <button onClick={handleSubmit} type="submit" className = "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" >Valider</button> 
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