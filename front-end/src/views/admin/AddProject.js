import React from "react";
import Axios from "axios"
import {useEffect,useState} from "react"

const CritereUrl="http://localhost:8000/api/critere/create"
const ProjectUrl="http://localhost:8000/api/project/create"

export default function AddProject() {
    const [critere,setCritere]=useState({
        difficulte:"",
        deadline:"",
        impact:"",
        implication:"",
        point_git:""

    })
    const [project,setProject]=useState({
        nom:"",
        repos:"",
        delai:""

    })
    function submit(e){
        e.preventDefault();
        Axios.post(CritereUrl,{
            difficulte:critere.difficulte,
            deadline:critere.deadline,
            impact:critere.impact,
            implication:critere.implication,
            point_git:critere.point_git
        })
        Axios.post(ProjectUrl,{
            nom:project.nom,
            repos:project.repos,
            delai:project.delai

        })
        .then(res=>{
            console.log(res.project);
        })
    }
    function handle(e){
        const newCritere={...critere}
        const newProject={...project}

        newCritere[e.target.id]=e.target.value
        setCritere(newCritere)

        newProject[e.target.id]=e.target.value
        setProject(newProject)
        
        console.log(newCritere);
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
                                <form onSubmit={(e)=>submit(e)}>
                                <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "nom" >Nom du projet </label> 
                                        <input type = "text" id="nom" onChange={(e)=>handle(e)} value={project.nom} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "nom du projet" />
                                    </div>
                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "repos" >lien github </label> 
                                        <input type = "text" id="repos" onChange={(e)=>handle(e)} value={project.repos} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "lien github" />
                                    </div>
                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "delai" >Delai du projet</label> 
                                        <input type = "number" id="delai" onChange={(e)=>handle(e)} value={project.delai} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "delai de votre projet" />
                                    </div>

                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" >Impact Projet </label> 
                                        <select id="impact" onChange={(e)=>handle(e)} value={critere.impact} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                            <option value="1">Debutant</option>
                                            <option value="2">Amateur</option>
                                            <option value="3">Normal</option>
                                            <option value="4">Haut Niveau</option>
                                            <option value="5">Legende</option>
                                        </select>
                                     </div>

                                     <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" >Difficulté </label> 
                                        <select id="difficulte" onChange={(e)=>handle(e)} value={critere.difficulte} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                            <option value="1">Debutant</option>
                                            <option value="2">Amateur</option>
                                            <option value="3">Normal</option>
                                            <option value="4">Haut Niveau</option>
                                            <option value="5">Legende</option>
                                        </select>
                                     </div>

                                     <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "implication" >Implication </label> 
                                        <select id="implication" onChange={(e)=>handle(e)} value={critere.implication}className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                            <option value="1">Debutant</option>
                                            <option value="2">Amateur</option>
                                            <option value="3">Normal</option>
                                            <option value="4">Haut Niveau</option>
                                            <option value="5">Legende</option>
                                        </select>
                                     </div>

                                     <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2"  htmlFor = "deadline" >DeadLine </label> 
                                        <select id="deadline" onChange={(e)=>handle(e)} value={critere.deadline}  className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                            <option value="1">Debutant</option>
                                            <option value="2">Amateur</option>
                                            <option value="3">Normal</option>
                                            <option value="4">Haut Niveau</option>
                                            <option value="5">Legende</option>
                                        </select>
                                     </div>

                                    <div className = "text-center mt-6" >
                                        <button className = "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" >Valider</button> 
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