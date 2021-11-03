import React,{useState,useContext,useEffect} from "react";
import TableDropdown from "../../components/Dropdowns/TableDropdown";
import {ProjectAxios} from "../../apis/Stat";
import {MemberAxios} from "../../apis/Stat";
import ProjectContext from "../../context/ProjectContext"
import MemberContext from "../../context/MemberContext"
import {useHistory} from "react-router"
export default function CheckProjectMember() {
    let history=useHistory();
    
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
                                    <div className="mt-8 bg-white w-24 pl-12 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                                        <div className="mb-8 mx-16 flex items-center">
                                            <img className="object-center object-cover rounded-full h-12 w-12" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
                                        </div>
                                        <div className="text-center mb-8">
                                            <h3 className="text-xl text-green-700 font-bold mb-2">Dany Bailey</h3>
                                            <h3 className="text-xl text-black font-bold mb-2">Point actuel:965</h3>
                                            <button className="text-base text-white bg-red-500 font-normal"> Enlever</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>
            </div>
        </>
    );
}