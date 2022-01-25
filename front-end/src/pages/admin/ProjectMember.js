import React,{useState,useEffect} from "react";
import {useParams} from "react-router"
import ProjectService from "../../utils/service/projectservice"
import Navbar from "../../components/Navbars/AuthNavbar";
import FooterSmall from "../../components/Footers/FooterSmall.js";



export default function ProjectMember(){
    const nom=useParams()
    const [pmembers,setPmembers]=useState([]);
    
    useEffect(()=>{

            async function fetchdata(){
            const response=await ProjectService.GetProjectMember(nom.nom);
            setPmembers(response.data)
        }
        fetchdata();
        
    },[]);
    return(
        <div>
              <Navbar transparent />
             <main>
             <section className="relative w-full h-full py-40 min-h-screen">
                  <div
                  className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-ful"
                  style={{
                  backgroundImage:
                       "url(" + require("assets/img/register_bg_2.png").default + ")",
                  }}
                  ></div>
                  <section>
             <div className="block relative z-1  pb-48">
             <div className = "bg-white py-4 rounded-lg ml-5 flex flex-wrap  container mx-auto px-1/100 h-full border-blueGray-50" >
                <h1 className=" cursor-pointer rounded-full mx-2/5 text-2xl mb-8 italic font-semibold bg-teal-700 text-white  text-center"><span className="far fa-arrow-alt-circle-down animate-bounce"></span>Les participants du projet numero {nom.nom}</h1>
             <div className = "mx-1/50  w-full flex flex-wrap" >
             {pmembers.map((member)=>(
                     <div key={member.id}  className = "hover:-mt-4  relative flex flex-col min-w-0 break-words mb-6 shadow-lg rounded-lg ease-linear transition-all duration-100 px-3 w-1/4 h-1/2" >
                            <div className="w-full">
                                 <div class="w-full rounded overflow-hidden shadow-lg">
                                     <img class="w-full" src={member.pdc_participant ? member.pdc_participant:require("assets/img/projet_fond.jpeg").default} alt="..." />
                                     <div className="px-5 py-4">
                                                <p className="text-center font-bold text-xl mb-2 text-teal-500">{member.nom_participant}</p>
                                                <p className="text-center font-bold text-xl mb-2 text-teal-500">{member.prenom_participant}</p>
                                            </div>
                                     <div className="w-full"> 
                                     <table className="w-full bg-transparent
                                            border-collapse">
                                                <thead>
                                                    <tr>
                                                        <th className="px-6 bg-zinc-300 align-middle border border-solid border-blueGray-600 text-blueGray-600  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total_point</th>
                                                        <th className="px-6  bg-orange-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{member.point_experience}</th>
                                                    </tr>
                                                    <tr>
                                                        <th className="px-6 bg-zinc-300 border-blueGray-600 text-blueGray-600   align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total_project</th>
                                                        <th className="px-6  bg-orange-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{member.nombre_projet}</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                     </div>
                                 </div>
                                 </div>
                             </div> 
             ))}
             </div> 
             </div>
         </div>
     </section>      
             <FooterSmall absolute />
        </section>
      </main>
   </div>
   )
}