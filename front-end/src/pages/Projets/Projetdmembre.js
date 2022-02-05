import React, { useEffect, useState } from "react";

import { useContext} from "react";
import {ProjectContext} from "../../utils/context/ProjectContext"

import Navbar from "../../components/Navbars/AuthNavbar";
import FooterSmall from "../../components/Footers/FooterSmall.js";
import { useParams } from "react-router";
import MemberService from "../../utils/service/memberservice"
import { MemberContext } from "../../utils/context/MemberContext";

export default function Project(){
    const {id}=useParams()
    const [pmembre,setPmembre]=useState([])
    const {members} =useContext(MemberContext)
     useEffect(()=>{
     async function fetchProjet(){
          try {
               await MemberService.getOneMemberProject(id).then((response)=>{
                    setPmembre(response.data)
               })
               
          } catch (error) {
               console.log(error.response.data);
          }
     }
     fetchProjet();
     },[])

     return(
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
                    <section>
                    <div className="block relative z-1  pb-48">
                    <div className = "bg-gray-400 py-4 rounded-lg  flex flex-wrap  container mx-auto px-1/100 h-full border-blueGray-50" >
                    {
                         members
                              .filter((memb) => memb.id==id)
                              .map((memb) => (
                              <h1 className="animate-bounce cursor-pointer rounded-full mx-2/5 text-base mb-8 italic font-semibold bg-teal-700 text-white fas fa-angle-double-down text-center"> Tous les projets de<span className="text-black"> {memb.prenom}</span></h1>
                         ))}
                    {pmembre.map((project)=>(
                        <div key={project.id} className = "flex  flex-wrap" >
                            <div className = "hover:-mt-4  relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-100  px-3" >
                                <div className = "flex flex-wrap">
                                    <div className = "w-full ">
                                        <div class="w-full rounded overflow-hidden shadow-lg">
                                            <img class="w-full" src={project.pdc ? project.pdc:require("assets/img/projet_fond.jpeg").default} alt="project" />
                                            <div class="px-6 py-4">
                                                <div class="font-bold text-xl mb-2 text-black">{project.Nom_project}</div>
                                            </div>
                                            <div className="w-full"> 
                                                <table className="w-full bg-transparent border-collapse">
                                                    <thead>
                                                        <tr>
                                                            <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Participant</th>
                                                            <th className="px-6 bg-orange-500  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{project.total_participant}</th>
                                                            
                                                        </tr>
                                                        <tr>
                                                            <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Status</th>
                                                            <th className="px-6 bg-orange-500  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{project.valide?"100%":"en cours"}</th>
                                                            
                                                        </tr>
                                                    </thead>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                        </div> 
                    ))}
                    </div>
                </div>
            </section>      
          <FooterSmall absolute />
          </section>
     </main>
     </>
     );
}
