import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import MemberService from "../../utils/service/memberservice"


export default function MemberProject() {
    const {id}=useParams()
    const [membersprojects,setMembersProjects]=useState([]);
    useEffect(()=>{
        async function fetchProjet(){
             try {
                  await MemberService.getOneMemberProject(id).then((response)=>{
                    setMembersProjects(response.data)
                  })
                  
             } catch (error) {
                  console.log(error.response.data);
             }
        }
        fetchProjet();
        },[id])
    return ( 
        <>
            <div className="container mx-auto">
                <div className = "relative flex flex-col ml-8 break-words   shadow-lg rounded bg-lightBlue-900 text-white">
                    <div className = "rounded-t mb-0 px-4 py-3 border-0" >
                        <div className = "flex flex-wrap items-center" >
                            <div className = "relative w-full px-4 max-w-full flex-grow flex-1" >
                                <h3 className = 
                                    "font-semibold text-lg " 
                                    >Projets aux quelles le membre participe</h3> 
                            </div> 
                        </div> 
                    </div> 
                    <div className = "block w-full overflow-x-auto" > { /* Projects table */ } 
                        <table className = "items-center w-full bg-white border-collapse" >
                            <thead>
                                <tr>
                                    <th className = "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">Nom du projet</th> 
                                    <th className ="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">Total_participant</th> 
                                    <th className = 
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">Completion</th>
                                    <th className = 
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"></th> 
                                </tr> 
                            </thead> 
                            <tbody >
                                {membersprojects.map((mproject)=>(
                                <tr key={mproject.Nom_project}>
                                    <th className = "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center" >
                                        <img src = {mproject.pdc?mproject.pdc: require("../../assets/img/projetic.png").default } className = "h-12 w-12 bg-white rounded-full border" alt = "..." ></img>{" "} 
                                        <span className = 
                                                "text-2xl ml-2 font-bold text-black " >{mproject.Nom_project} </span> 
                                    </th> 
                                    <td className = "text-emerald-500  text-2xl  border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4" >
                                        {mproject.total_participant}
                                    </td>  
                                    <td className = "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >
                                        <div className = "flex items-center" >
                                            <span className = "text-2xl mr-2 text-lightBlue-300" ><i className="fas  fa-cog fa-spin text-black"></i>{mproject.valide?"100%":"En cours"}</span> 
                                        </div> 
                                    </td> 
                                </tr> 
                                ))}
                            </tbody> 
                        </table> 
                    </div> 
                </div>
            </div>
        </>
    );
}