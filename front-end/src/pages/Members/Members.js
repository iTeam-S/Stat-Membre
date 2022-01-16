import React,{useState,useEffect} from "react";


import Navbar from "../../components/Navbars/AuthNavbar";
import FooterSmall from "../../components/Footers/FooterSmall.js";
import MemberService from "../../utils/service/memberservice"




export default function MemberList(){
    const [members,setMembers]=useState([]);
    const [memberzero,setMemberzero]=useState({});

    useEffect(()=>{
        MemberService.getListMember().then(response=>{
            setMembers(response.data)
            setMemberzero(response.data[0]);
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
             <div className = "bg-white py-4 rounded-lg ml-5 flex flex-wrap  container mx-auto px-1/100 h-full border-blueGray-50" >
                    <h1 className="animate-bounce cursor-pointer rounded-full mx-2/5 text-base mb-8 italic font-semibold bg-teal-700 text-white fas fa-angle-double-down text-center"> Voici les membres d'iTeams</h1>
             <div className = "mx-1/50  w-full flex flex-wrap" >
             {members.map((member)=>(
                     <div key={member.id}  className = "hover:-mt-4  relative flex flex-col min-w-0 break-words mb-6 shadow-lg rounded-lg ease-linear transition-all duration-100 px-3 w-1/4 h-1/2" >
                            <div className="w-full">
                                 <div class="w-full rounded overflow-hidden shadow-lg">
                                     <img class="w-full" src={member.pdc ? member.pdc:require("assets/img/team-1-800x800.jpg").default} alt="..." />
                                     <div className="px-5 py-4">
                                                <p className="text-center font-bold text-xl mb-2 text-teal-500">{member.nom}</p>
                                                <p className="text-center font-bold text-xl mb-2 text-teal-500">{member.prenom}</p>
                                            </div>
                                     <div className="w-full"> 
                                     <table className="w-full bg-transparent
                                            border-collapse">
                                                <thead>
                                                    <tr>
                                                        <th className="px-6 bg-zinc-300 border-blueGray-600 text-blueGray-600 align-middle border border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Rang</th>
                                                        <th className="px-6 bg-orange-500  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{(members.indexOf(member))+1}</th>
                                                    </tr>
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
</>
);
}