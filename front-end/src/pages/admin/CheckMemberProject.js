import React,{useState} from "react";
import {useHistory} from "react-router"
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup"
import { useForm } from "react-hook-form";
import Navbar from "../../components/Navbars/AuthNavbar";
import { useEffect } from "react";
import MemberService from "../../utils/service/memberservice"



export default function CheckMemberProject() {
    
    const [membres,setMembres]=useState([])
    const [projets,setProjets]=useState([])
      useEffect(()=>{
          async function fetchData(){
            try {
                const membre=await MemberService.getListMember()
                setMembres(membre.data)
                
            } catch (error) {
                console.log(error);
            }
              
          }
          
        fetchData();
      },[])
  const validationSchema = Yup.object().shape({
    id_membre: Yup.number()
      .required('Ce champ est obligatoire'),
    member_github: Yup.string()
      .required('Ce champ est obligatoire')
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

    let history=useHistory()
    const [errer,setErrer]=useState(false)
    const [errorMessage,setErrorMessage]=useState("")

    const handleCheck=(data)=>{
            
                history.push(`/admin/member/${data.id_membre}/allproject`);
            
                setErrer(true)
                setErrorMessage("Le nom du membre est introuvable")

            
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
                                        <h6 className = "text-blueGray-500 text-sm font-bold">Check all member project </h6> 
                                    </div> 
                                    
                                    <hr className = "mt-6 border-b-1 border-blueGray-300" />
                                </div> 
                                <div className = "flex-auto px-4 lg:px-10 py-10 pt-0" >
                                    <form onSubmit={handleSubmit(handleCheck)}>
                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "implication" >Nom du membre</label> 
                                        <select id="id_membre" name="id_membre" {...register('id_membre')} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                            {membres.map((memb)=>(
                                            <option key={memb.id} value={memb.id}>{memb.id}-{memb.nom}</option>
                                            ))}
                                        </select>
                                        <p className="text-red-500 italic">{errors.implication?.message}</p>

                                     </div>
    
                                     <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "implication" >Github du membre</label> 
                                        <select id="id_membre" name="member_github" {...register('member_github')} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                            {membres.map((memb)=>(
                                            <option key={memb.id} value={memb.git_hub}>{memb.user_github}</option>
                                            ))}
                                        </select>
                                        <p className="text-red-500 italic">{errors.implication?.message}</p>

                                     </div>
                                        
                        
    
                                        <div className = "text-center mt-6" >
                                            <input type="submit" className = "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" value="Check"/>
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