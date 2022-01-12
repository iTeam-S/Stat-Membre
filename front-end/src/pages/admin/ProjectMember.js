import React,{useState,useEffect} from "react";
import {useParams} from "react-router"
import ProjectService from "../../utils/service/projectservice"
import Navbar from "../../components/Navbars/AuthNavbar";
import FooterSmall from "../../components/Footers/FooterSmall.js";


import {ProjectAxios} from "../../utils/apis/Stat";


export default function ProjectMember(){
    const nom=useParams()
    console.log(nom);
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
                  <div className="rounded-lg bg-white mx-1/5 container block relative   pb-48">
                              <h1 className="mx-2/5 pt-8 italic font-semibold text-orange-500">Les participants du projet {nom.nom}</h1>
                              <div className = "flex flex-wrap" >
                              {pmembers.map((member=>(
                                  <div key={member.id} className = "w-3/5 ml-1/40 mr-1/40 mt-1/2 h-1/2" >
                                      <div className=" 
                                      transition ease-in-out delay-150 bg-teal-700  hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-150
                                      w-full  max-w-sm rounded overflow-hidden shadow-lg">
                                      <img alt = "..." className = "w-full  align-middle border-none shadow-lg" src = {member.pdc_participant?member.pdc_participant:("https://h5ckfun.info/wp-content/uploads/2015/07/MyAvatar.png") }/>
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
                                  )))}
                              </div> 
              </div>
          </section>      
             <FooterSmall absolute />
        </section>
      </main>
   </div>
   )
}