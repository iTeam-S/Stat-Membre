import React,{useState} from "react";
import { useHistory } from "react-router";


import { useContext} from "react";
import {ProjectContext} from "../../utils/context/ProjectContext"

import Navbar from "../../components/Navbars/AuthNavbar";
import FooterSmall from "../../components/Footers/FooterSmall.js";

export default function Project(){
    const {projects}=useContext(ProjectContext)
    const radios=[
        {title:"En_cours",value:0},
        {title:"Valide",value:1}
    ]
    const [selectedRadio,setSelectedRadio]=useState("");
    let history=useHistory()
    const CheckProjectMember=(id)=>{
        history.push(`/public/project/${id}/mproject`)
      }
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
                        <div className = "py-4 rounded-lg ml-5 flex flex-wrap  container mx-auto px-1/100 h-full border-blueGray-50" >
                        <h1 className=" cursor-pointer rounded-full mx-2/5 text-2xl mb-8 italic font-semibold bg-teal-700 text-white  text-center"><span className="far fa-arrow-alt-circle-down animate-bounce"></span> Voici Nos projets</h1>
                            <section className="w-full   mb-8 h-8 flex-nowrap">
                                {radios.map((radio)=>{
                                    return(
                                    <span key={radio.value}>
                                    <input 
                                    className="mx-4 text-2xl" 
                                    type="radio"
                                    value={radio.value}
                                    id={radio.title}
                                    checked={radio.value==selectedRadio}
                                    onChange={(e)=>setSelectedRadio(e.target.value)}
                                    />
                                        <label className="text-2xl font-bold text-white" htmlFor={radio.title}>{radio.title}</label>
                                    </span>
                                    ) 
                                })}
                            </section>
                        {projects
                        .filter((project)=>project.valide==(selectedRadio)).map((project)=>(
                            <div key={project.pdc?project.pdc:project.id} className = "flex  flex-wrap" >
                                <div className="max-w-250-px  hover:mt-4 duration-300 focus:outline-none mx-4 relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-teal-700">
                                    <img
                                    alt="..."
                                    src={project.pdc?project.pdc:require("assets/img/projet_fond.jpeg").default}
                                    className="max-w-250-px h-1/25  align-middle rounded-t-lg"
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
                                        className="text-gray-400 fill-current"
                                        ></polygon>
                                    </svg>
                                    <h3 className="text-2xl font-bold text-white">{project.nom}</h3>
                                    <div className="flex container mt-10">
                                        {project.participant.map((part)=>(
                                            <div onClick={()=>CheckProjectMember(project.id)} key={part.id} className="relative z-0 cursor-pointer">
                                            <img src={part.pdc_participant ? part.pdc_participant:require("assets/img/team-1-800x800.jpg").default} alt="..."
                                                className = "w-10 h-10 rounded-full  border-2 border-blueGray-50 shadow"/>
                                            </div>
                                            ))}
                                        </div>
                                    <div className="w-full px-4 text-center mt-10">
                                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                                <div className="mr-4 p-3 text-center">
                                                    <span className="text-base font-bold block tracking-wide text-black">
                                                        {project.valide?"100%":
                                                        <div>
                                                         <i className="fas  fa-cog fa-spin text-black"></i>
                                                         <span>en_cours</span>
                                                         </div>}
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
                                    <a href={project.repos}>
                                    <i className = "text-blueGray-400 fab fa-github text-lg leading-lg "/><button className="hover:text-blueGray-800 text-xl ">Voir sur github</button>
                                    </a>
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