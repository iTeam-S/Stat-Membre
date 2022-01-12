import React,{useState} from "react";
import {useHistory} from "react-router"
import {useForm} from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import ProjectService from "../../utils/service/projectservice"


import {ProjectAxios} from "../../utils/apis/Stat";


export default function CheckMemberProject() {
    let history=useHistory()
    const [errer,setErrer]=useState(false)
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
    

   
    const DeleteHandle=async(data)=>{
        try {
            await ProjectService.DeleteMember(data.membername,data.projectname) 
            history.push("/admin/dashboard");
            
        } catch (error) {
            console.log(error);
        }
        
    };
    return ( 
            <>
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
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </>
        );
}