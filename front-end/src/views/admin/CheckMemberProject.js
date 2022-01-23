import React,{useState,useContext,useEffect} from "react";
import TableDropdown from "../../components/Dropdowns/TableDropdown";
import {ProjectAxios} from "../../apis/Stat";
import {MemberAxios} from "../../apis/Stat";
import ProjectContext from "../../context/ProjectContext"
import MemberContext from "../../context/MemberContext"
import {useHistory} from "react-router"
export default function CheckMemberProject() {
    let history=useHistory()
    const [membername,setMembername]=useState("");
    const [user_id,setUser_id]=useState("")

    const handleSubmit=async (e)=>{
        e.preventDefault()
        try {
            setMembername(membername);
            const Check=await history.push(`/member/${membername}/allproject`);  
        } catch (error) {
            console.log(error);
            
        }
    };
    return ( 
            <>
                <div className = "container mx-auto px-4 h-full">
                    <div className = "flex content-center items-center justify-center h-full">
                        <div className = "w-full lg:w-4/12 px-4">
                            <div className = "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                                <div className = "rounded-t mb-0 px-6 py-6">
                                    <div className = "text-center mb-3">
                                        <h6 className = "text-blueGray-500 text-sm font-bold">Check all member project </h6> 
                                    </div> 
                                    
                                    <hr className = "mt-6 border-b-1 border-blueGray-300" />
                                </div> 
                                <div className = "flex-auto px-4 lg:px-10 py-10 pt-0" >
                                    <form>
                                        <div className = "relative w-full mb-3" >
                                            <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "nom" >Member_name</label> 
                                            <input type = "text" id="membername" value={membername} onChange={(e)=>setMembername(e.target.value)} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"placeholder = "nom de membre" />
                                        </div>
    
                                        <div className = "relative w-full mb-3" >
                                            <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "user_github" >Member_github </label> 
                                            <input type = "text" id="user_github" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "github"/>
                                        </div> 
                        
    
                                        <div className = "text-center mt-6" >
                                            <button onClick={handleSubmit} className = "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type = "button" >Check </button> 
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