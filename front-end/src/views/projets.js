import React,{useState,useEffect} from "react";
import ProjectService from "../service/projectservice";


import Navbar from "../components/Navbars/AuthNavbar";
import FooterSmall from "../components/Footers/FooterSmall.js";


export default function Project(){
     const [projets,setProjets]=useState([]);

    useEffect(()=>{
        ProjectService.GetAll().then(response=>{
            setProjets(response.data)
        });
        
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
                    <div className = "py-4 rounded-lg ml-5 flex flex-wrap  container mx-auto pl-48 h-full border-blueGray-50" >
                    {projets.map((project)=>(
                        <div key={project.id} className = "flex  flex-wrap" >
                            <div className = "w-full lg:w-12/12 px-4  -mt-24" >
                                <div className = "flex flex-wrap" >
                                    <div className = "w-full ">
                                        <div class="w-full max-w-sm rounded overflow-hidden shadow-lg">
                                            <img class="w-full" src="http://via.placeholder.com/150x100.png" alt="Mountain" />
                                            <div class="px-6 py-4">
                                                <div class="font-bold text-xl mb-2 text-teal-500">{project.nom}</div>
                                            </div>
                                            <div class="w-full">
                                               <table className="items-center w-full  border-collapse">
                                                    <thead className="">
                                                         <tr className="">
                                                              <th className="text-white text-whitepx- text-blueGray-700 align-middle border bg-white border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Point</th>
                                                              <th className="text-white text-whitepx- text-blueGray-700 align-middle border bg-white border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Status</th>
                                                              <th className="text-white text-whitepx- text-blueGray-700 align-middle border bg-white border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Participant</th>
                                                         </tr>
                                                    </thead>
                                                    <tbody>
                                                         <tr>
                                                            <th className="text-white text-whitepx- text-orange-500 align-middle border bg-white border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{project.total_point}</th>
                                                            <th className="text-white text-whitepx- text-orange-500 align-middle border bg-white border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">En cours</th>
                                                            <th className="text-white text-whitepx- text-orange-500 align-middle border bg-white border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{project.total_participant}</th>
                                                         </tr>
                                                    </tbody>
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
