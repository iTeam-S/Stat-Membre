
import {useHistory} from "react-router"
import React,{useState,useContext} from "react";



import { MemberContext } from "../../utils/context/MemberContext";
import projectservice from "../../utils/service/projectservice";


export default function AddMember() {
    let history=useHistory();
    const {addMember} =useContext(MemberContext)
    const [membername,setMembername]=useState("")
    const [projectname,setProjectname]=useState("")

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response=await projectservice.addMember(membername,projectname);
            const red=await history.push("/admin/dashboard");
            addMember(response.data);
            
        } catch (error) {
            console.log(error);
            
        };
        
    }
    return ( 
        <>
            <div className = "container mx-auto px-4 h-full" >
                <div className = "flex content-center items-center justify-center h-full" >
                    <div className = "w-full lg:w-6/12 px-4" >
                        <div className = "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0" >
                            <div className = "rounded-t mb-0 px-6 py-6" >
                                <div className = "text-center mb-3" >
                                    <h6 className = "text-blueGray-500 text-sm font-bold" >Ajouter un membre à un projet</h6> 
                                </div> 
                            </div> 
                            <div className = "flex-auto px-4 lg:px-10 py-10 pt-0" >
                                <form action="">
                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "membername" >Nom</label> 
                                        <input type = "text"  value={membername} onChange={e =>setMembername(e.target.value)} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "Nom du membre(en majuscule)" id="membername" />
                                    </div>
                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "prenom" >Prenom</label> 
                                        <input type = "text" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "Prenom du membre" id="prenom" />
                                    </div>
    
    
                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "projectname" >Nom_du_projet</label> 
                                        <input type = "text" id="projectname"  value={projectname} onChange={e =>setProjectname(e.target.value)} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  placeholder = "Nom du projet" />
                                    </div>
                                    
                                    <div className = "text-center mt-6" >
                                        <button type="submit" onClick={handleSubmit}  className = "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" >Valider</button> 
                                    </div> 
                                </form> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </>
    );
}