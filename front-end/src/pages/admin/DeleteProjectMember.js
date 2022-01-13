import React,{useState} from "react";
import {useHistory} from "react-router"
import {useForm} from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import ProjectService from "../../utils/service/projectservice"
import Navbar from "../../components/Navbars/AuthNavbar";



export default function CheckMemberProject({membre,projet}) {
    const nom_membre=[]
    const nom_projet=[]
    for (let index = 0; index < membre.length; index++) {
        nom_membre.push(membre[index].nom);  
    }
    for (let index = 0; index < projet.length; index++) {
        nom_projet.push(projet[index].project_name);
        
    }
    let history=useHistory()
  const validationSchema = Yup.object().shape({
    membername: Yup.string()
      .required('Nom du membre obligatoire'),
   projectname: Yup.string()
      .required('Nom du projet obligatoire')
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
    const [errer,setErrer]=useState(false)
    const [errorMessage,setErrorMessage]=useState("")

   
    const DeleteHandle=async(data)=>{
            if(nom_membre.includes(data.membername.toUpperCase()) && nom_projet.includes(data.projectname)){
                await ProjectService.DeleteMember(data.membername.toUpperCase(),data.projectname) 
                history.push("/admin/dashboard");
            }else if(!nom_membre.includes(data.membername.toUpperCase())){
                setErrer(true)
                setErrorMessage("Le nom du membre est introuvable")
            }else{
                setErrer(true)
                setErrorMessage("Le nom du projet est introuvable")
            }
            
        
    };
    return ( 
            <>
            <Navbar transparent />
                <main>
                    <section className="relative w-full h-full py-40 min-h-screen">
                    <div
                        className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
                    ></div>
          
                <div className = "container mx-auto px-4 h-full">
                    <div className = "flex content-center items-center justify-center h-full">
                        <div className = "w-full lg:w-4/12 px-4">
                            <div className = "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                                <div className = "rounded-t mb-0 px-6 py-6">
                                    <div className = "text-center mb-3">
                                        <h6 className = "text-blueGray-500 text-sm font-bold">Delete project's member </h6> 
                                    </div> 
                                    
                                    <hr className = "mt-6 border-b-1 border-blueGray-300" />
                                </div> 
                                <div className = "flex-auto px-4 lg:px-10 py-10 pt-0" >
                                    <form onSubmit={handleSubmit(DeleteHandle)}>
                                        <div className = "relative w-full mb-3" >
                                            <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "projectname" >Nom du projet</label> 
                                            <input type = "text" id="projectname" name="projectname"  {...register('projectname')}className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"placeholder = "nom du projet" />
                                            <p className="text-red-500 italic">{errors.projectname?.message}</p>

                                        </div>
    
                                        <div className = "relative w-full mb-3" >
                                            <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "membername" >Nom du membre </label> 
                                            <input type = "text" id="membername" name="membername" {...register('membername')} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "github"/>
                                            <p className="text-red-500 italic">{errors.membername?.message}</p>

                                        </div>
                        
    
                                        <div className = "text-center mt-6" >
                                            <input  type="submit" className = "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" value="Remove Member"/> 
                                        </div> 
                                    </form>
                                    {errer &&(
                                    <div className="bg-rose-300 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                        <strong className="font-bold">Errer!</strong>
                                            <span className="block sm:inline">{errorMessage} </span>
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
        </section>
      </main>
            </>
        );
}