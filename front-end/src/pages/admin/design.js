import {useHistory} from "react-router"
import React,{useState,useContext, useEffect} from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {ProjectContext} from "../../utils/context/ProjectContext"
import {MemberContext} from "../../utils/context/MemberContext"



import Navbar from "../../components/Navbars/AuthNavbar.js";
import FooterSmall from "../../components/Footers/FooterSmall.js";
import ProjectService from "../../utils/service/projectservice";



export default function AddMember() {

    const {projects}=useContext(ProjectContext)
    const {members}=useContext(MemberContext)
    const [projetEncours,setProjetencours]=useState([])

    useEffect(()=>{
      const filterData=()=>{
        const tabfiltre=projects.filter(proj=>proj.valide===0)
        setProjetencours(tabfiltre)
      }
      filterData();

    },[projects])
    const [errorMessage,setErrorMessage]=useState("")
    const [successMessage,setMessage]=useState("")
    const [errer,setErrer]=useState(false)


    const validationSchema = Yup.object().shape({
        id_membre: Yup.number()
          .required('membername  is required'),
        id_projet: Yup.number()
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

    const handleAddmember=async(data)=>{
        try {
            const response=await ProjectService.addMember(data.id_membre,data.id_projet);
            history.push("/admin/dashboard");   
        } catch (error) {
            setErrer(true)
            setErrorMessage(error.response.data.message);
            
        };
        
    }
    
    return ( 
        <>
        <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>

                         <div className = "w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32" >
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-teal-700">
                                <img
                                  alt="..."
                                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                                  className="w-full align-middle rounded-t-lg"
                                />
                                <blockquote className="relative p-8 mb-4">
                                  <svg
                                    preserveAspectRatio="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 583 95"
                                    className="absolute left-0 w-full block h-95-px -top-94-px"
                                  >
                                    <polygon
                                      points="-30,95 583,95 583,65"
                                      className="text-purple-700 fill-current"
                                    ></polygon>
                                  </svg>
                                  <div className="w-full px-4 text-center mt-20">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                             <div className="mr-4 p-3 text-center">
                                                  <span className="text-xl font-bold block uppercase tracking-wide text-white">
                                                       22
                                                  </span>
                                                  <span className="text-xl text-white">Status</span>
                                             </div>
                                                  <div className="mr-4 p-3 text-center">
                                                  <span className="text-xl font-bold block uppercase tracking-wide text-white">
                                                       10
                                                  </span>
                                                  <span className="text-xl text-white">Participant</span>
                                             </div>
                                        </div>
                                   </div>
                                </blockquote>
                            </div> 
                        </div>
            <FooterSmall absolute />
        </section>
      </main>
        </>
    );
}