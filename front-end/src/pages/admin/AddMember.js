import {useHistory} from "react-router"
import React,{useState,useContext} from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';



import { MemberContext } from "../../utils/context/MemberContext";
import projectservice from "../../utils/service/projectservice";


export default function AddMember() {
    const [errorMessage,setErrorMessage]=useState("")
    const [successMessage,setMessage]=useState("")
    const [errer,setErrer]=useState(false)
    const validationSchema = Yup.object().shape({
        membername: Yup.string()
          .required('membername  is required'),
          projectname: Yup.string()
          .required('Projectname is required')
      });
      const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
      });
    let history=useHistory();
    const {addMember} =useContext(MemberContext)

    const handleAddmember=async(data)=>{
        try {
            const response=await projectservice.addMember(data.membername.toUpperCase(),data.projectname);
            history.push("/admin/dashboard");
            addMember(response.data);
            
        } catch (error) {
            setErrer(true)
            setErrorMessage(error.response.data.message);
            
        };
        
    }
    return ( 
        <>
            <div className = "container mx-auto px-4 h-full" >
                <div className = "flex content-center items-center justify-center h-full" >
                    <div className = "w-full lg:w-6/12 px-4" >
                        <div className = "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0" >
                            <div className = "rounded-t mb-0 px-6 py-6" >
                                <div className = "text-center mb-3" >
                                    <h6 className = "text-blueGray-500 text-sm font-bold" >Ajouter un membre à un projet</h6> 
                                </div> 
                            </div> 
                            <div className = "flex-auto px-4 lg:px-10 py-10 pt-0" >
                                <form onSubmit={handleSubmit(handleAddmember)}>
                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "membername" >Nom</label> 
                                        <input type = "text" name="membername" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "Nom du membre(en majuscule)" id="membername" {...register('membername')}/>
                                        <p className="text-red-500 italic">{errors.membername?.message}</p>
                                    </div>
                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "prenom" >Prenom</label> 
                                        <input type = "text" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "Prenom du membre" id="prenom" />
                                    </div>
    
    
                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "projectname" >Nom_du_projet</label> 
                                        <input type = "text" name="projectname" id="projectname"   className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  placeholder = "Nom du projet" {...register('projectname')} />
                                        <p className="text-red-500 italic">{errors.projectname?.message}</p>
                                    </div>
                                    
                                    <div className = "text-center mt-6" >
                                        <input type="submit" className = "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" value="Valider"/> 
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