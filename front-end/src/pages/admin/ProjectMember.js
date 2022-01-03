import React,{useState,useEffect} from "react";
import {useParams} from "react-router"





import {ProjectAxios} from "../../utils/apis/Stat";


export default function ProjectMember(){
    const nom=useParams()
    const [pmembers,setPmembers]=useState([]);
    useEffect(()=>{
            async function fetchdata(){
            const response=await ProjectAxios.get(`/${nom.projectname}/part`);
            setPmembers(response.data)
            
        }
        fetchdata();
        
    },[]);
    return ( 
        <>
            <div className="container mx-auto">
                <div className = "relative flex flex-col ml-8 break-words   shadow-lg rounded bg-lightBlue-900 text-white">
                    <div className = "rounded-t mb-0 px-4 py-3 border-0" >
                        <div className = "flex flex-wrap items-center" >
                            <div className = "relative w-full px-4 max-w-full flex-grow flex-1" >
                                <h3 className = "font-semibold text-lg text-center ">Tous les participants de ce projet
                                </h3> 
                                <div className="my-20">
                                    {pmembers.map((member)=>(
                                    <div key={member.id} className="mt-8 bg-white w-24 pl-12 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                                        <div className="mb-8 mx-16 flex items-center">
                                            <img className="object-center object-cover rounded-full h-12 w-12" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="pdp"/>
                                        </div>
                                        <div className="text-center mb-8">
                                            <h3 className="italic text-xl text-black font-bold mb-2">{member.nom_participant + " "}{member.prenom_participant}</h3>
                                            <h3 className="text-xl text-black font-bold mb-2">Point actuel: {member.point_experience}</h3>
                                            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded"> Enlever</button>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>
            </div>
        </>
    );
}