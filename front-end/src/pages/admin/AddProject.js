import React, { useContext,useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';


import {useHistory} from "react-router"



import ProjectService from "../../utils/service/projectservice"
import { ProjectContext } from "../../utils/context/ProjectContext";
import { CritereContext } from "../../utils/context/CritereContext";
import { AuthService } from "../../utils/service/authservice";




export default function AddProject() {
    const user=AuthService.getCurrentUser()
    const [errer,setErrer]=useState(false)
    const [successMessage,setSuccesMessage]=useState("")
    const [errorMesssage,setErrorMessage]=useState("")

    let history=useHistory()
    const {addProject}=useContext(ProjectContext)
    
    const validationSchema = Yup.object().shape({
        nom: Yup.string()
          .required('Ce champ est obligatoire'),
        repos: Yup.string()
          .required('Ce champ est obligatoire'),
        delai: Yup.number()
          .required('Ce champ est obligatoire'),
      });
      const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
      });

   const  handleAddproject= async(data)=>{
       
        try {
            const project=await ProjectService.AddProject(data.nom,data.repos,data.delai)
            if(user && user.role==='admin'){
                history.push(`/admin/dashboard`);
            }else{
                history.push(`/`)
            }
            setSuccesMessage(project.data.message)
            addProject(project.data);
        } catch (error) {
            setErrer(true)
            setErrorMessage(error.response.data.message)
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
                                <form onSubmit={handleSubmit(handleAddproject)}>
                                <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "nom" >Nom du projet </label> 
                                        <input type = "text" id="nom"  name="nom" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "nom du projet" {...register('nom')} />
                                        <p className="text-red-500 italic">{errors.nom?.message}</p>

                                    </div>
                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "repos" >lien github </label> 
                                        <input type = "text" id="repos" name="repos"  className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "lien github" {...register('repos')} />
                                        <p className="text-red-500 italic">{errors.repos?.message}</p>

                                    </div>
                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "delai" >Delai du projet</label> 
                                        <input type = "number" id="delai"  name="delai"  className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "delai de votre projet" {...register('delai')}/>
                                        <p className="text-red-500 italic">{errors.delai?.message}</p>
                                    </div>
                                    <div className = "text-center mt-6" >
                                        <input  type="submit" className = "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"  value="Valider"/> 
                                    </div>
                                    
                                </form> 
                                {errer &&(
                                <div className="bg-rose-300 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                    <strong className="font-bold">Errer!</strong>
                                        <span className="block sm:inline">{errorMesssage} </span>
                                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                    <svg onClick={()=>{setErrer(false)}} className="fill-current h-12 w-12 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                                    </span>
                                </div>
                                )}
                                {successMessage &&(
                                <div className="bg-teal-700 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                    <strong className="font-bold">Bravo!</strong>
                                        <span className="block sm:inline">{successMessage} </span>
                                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                    <svg onClick={()=>{setErrer(false)}} className="fill-current h-12 w-12 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                                    </span>
                                </div>
                                )}
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </>
    );
}