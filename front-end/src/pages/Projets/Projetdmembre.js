import React, { useEffect, useState } from "react";

import { useContext} from "react";


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
               console.log(error);
          }
     }
     fetchProjet();
     },[id])
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
                    <div className = " py-4 rounded-lg  flex flex-wrap  container mx-auto px-1/100 h-full border-blueGray-50" >
                    {
                         members
                              .filter((memb) => memb.id===id)
                              .map((memb) => (
                              <h1 key={memb.id} className="animate-bounce cursor-pointer rounded-full mx-2/5 text-base mb-8 italic font-semibold bg-teal-700 text-white fas fa-angle-double-down text-center"> Tous les projets de<span className="text-black"> {memb.prenom}</span></h1>
                         ))}
                    {pmembre.length===0 &&(
                        <div className = "container mx-auto px-4 h-full" >
                        <div className = "flex content-center items-center justify-center h-full" >
                            <div className = "w-full lg:w-6/12 px-4" >
                                <div className = "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0" >
                                    <div className = "rounded-t mb-0 px-6 py-6" >
                                        <div className = "text-center mb-3" >
                                            <h6 className = "text-blueGray-500 text-sm font-bold italic semibold" >Ce membre n'a pas encore du projet</h6> 
                                        </div> 
                                    </div>  
                                </div> 
                            </div> 
                        </div> 
                    </div>
                    )}
                    {pmembre.map((project)=>(
                            <div key={project.Nom_project} className = "flex  flex-wrap" >
                                <div className="max-w-250-px hover:mt-4 duration-300 focus:outline-none mx-4 relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-teal-700">
                                    <img
                                    alt="..."
                                    src={project.pdc?project.pdc:require("assets/img/projet_fond.jpeg").default}
                                    className="w-full max-w-250-px h-1/25 align-middle rounded-t-lg"
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
                                    <h3 className="text-2xl font-bold text-white">{project.Nom_project}</h3>
                                    
                                    <div className="w-full px-4 text-center mt-10">
                                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                                <div className="mr-4 p-3 text-center">
                                                    <span className="text-base font-bold block uppercase tracking-wide text-black">
                                                        {project.valide?"100%":"En cours"}
                                                    </span>
                                                    <span className="text-xl text-white">Status</span>
                                                </div>
                                                    <div className="mr-4 p-3 text-center">
                                                        <span className="text-base font-bold block uppercase tracking-wide text-black">
                                                            {project.total_participant?project.total_participant:0}
                                                        </span>
                                                        <span className="text-xl text-white">Participant</span>
                                                </div>
                                            </div>
                                    </div>
                                    <i className = "text-blueGray-400 fab fa-github text-lg leading-lg "/><button className="hover:text-blueGray-800 text-xl ">
                                    <a href={project.Repos_project} target="_blank" rel="noreferrer" >Voir sur github</a>
                                        </button>
                                    </blockquote>
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
