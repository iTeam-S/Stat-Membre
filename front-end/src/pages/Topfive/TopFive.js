import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";



import MemberService from "../../utils/service/memberservice";



export default function Topfive(){
     const [first,setFirst]=useState({});
     const [second,setSecond]=useState({});
     const [third,setThird]=useState({});
     const [forth,setForth]=useState({});
     const [fifth,setFifth]=useState({});


    useEffect(()=>{
        MemberService.getTopFive().then(response=>{
        setFirst(response.data[0]);
        setSecond(response.data[1]);
        setThird(response.data[2]);
        setForth(response.data[3]);
        setFifth(response.data[4]);
     });

     },[])
     return(
          <div>
            <section className="mt-12" >
                    <h3 className="text-3xl font-semibold text-center text-blueGray-600">
                        Top 5 de la communauté
                    </h3>
                    <div className="text-center mt-5 text-pulse-500 font-semibold">
                        <Link to="/views/public/memberlist">Tout voir</Link><span><a href="view/projet.html">
                        <i className="fa fa-chevron-right"></i></a></span>
                    </div>
                    <div className="mx-1/5 w-9/12 rounded-lg mt-5 flex flex-no-wrap bg-white container h-full border-blueGray-50">
                        {first &&(
                        <div className="relative flex flex-col w-1/5 break-words bg-teal-700 rounded mt-1/2  shadow-lg">
                                <div className=" w-full">
                                        <div className="relative w-10/12 pr-4 max-w-full flex-grow flex-1">
                                            <span className = "h-12 w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                                                <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = {first.pdc?first.pdc: require("../../assets/img/team-1-800x800.jpg").default }/>
                                            </span>
                                            <span className="font-semibold text-xl text-blueGray-700">
                                                {first.prenom}
                                            </span>
                                        </div> 
                                        <div className="w-full">
                                            <table className="w-full bg-transparent border-collapse">
                                                <thead>
                                                    <tr>
                                                        <th className="px-6 bg-teal-700 text-white align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Rang</th>
                                                        <th className="px-6  bg-orange-500 align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">1</th>
                                                    </tr>
                                                    <tr>
                                                        <th className="px-6 bg-teal-700 text-white align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total point</th>
                                                        <th className="px-6  bg-orange-500 align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{first.point_experience}</th>
                                                    </tr>
                                                    <tr>
                                                        <th className="px-6 bg-teal-700 text-white align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total projets</th>
                                                        <th className="px-6  bg-orange-500 align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{first.nombre_projet}</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div> 
                                </div>
                                
                        </div>
                        )}
                        {second &&(
                        <div className="relative flex flex-col w-1/5 break-words bg-teal-500 rounded mt-1/4 xl:mb-0 shadow-lg">
                                <div className=" w-full">
                                        <div className="relative w-10/12 pr-4 max-w-full flex-grow flex-1">
                                            <span className = "h-12 w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                                                <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = {second.pdc?second.pdc: require("../../assets/img/team-1-800x800.jpg").default }/>
                                            </span>
                                            <span className="font-semibold text-xl text-blueGray-700">
                                                {second.prenom}
                                            </span>
                                        </div>   
                                        <div className="w-full"> 
                                            <table className="w-full bg-transparent border-collapse">
                                                <thead>
                                                    <tr>
                                                        <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Rang</th>
                                                        <th className="px-6  bg-orange-500 align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">2</th>
                                                    </tr>
                                                    <tr>
                                                        <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total point</th>
                                                        <th className="px-6  bg-orange-500 align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{second.point_experience}</th>
                                                    </tr>
                                                    <tr>
                                                        <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total projets</th>
                                                        <th className="px-6  bg-orange-500 align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{second.nombre_projet}</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div> 
                                </div>
                        </div>
                        )}
                        {third &&(
                        <div className="relative flex flex-col w-1/5 break-words bg-teal-300 rounded mt-1/6 xl:mb-0 shadow-lg">
                                <div className=" w-full">
                                        <div className="relative w-10/12 pr-4 max-w-full flex-grow flex-1">
                                            <span className = "h-12 w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                                                <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = { third.pdc?third.pdc: require("../../assets/img/team-1-800x800.jpg").default }/> 
                                            </span>
                                            <span className="font-semibold text-xl text-blueGray-700">
                                                {third.prenom}
                                            </span>
                                        </div>   
                                        <div className="w-full"> 
                                            <table className="w-full bg-transparent border-collapse">
                                                <thead>
                                                    <tr>
                                                        <th className="px-6 bg-teal-300 text-blueGray-600 align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Rang</th>
                                                        <th className="px-6 bg-orange-500  align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">3</th>
                                                    </tr>
                                                    <tr>
                                                        <th className="px-6 bg-teal-300 text-blueGray-600 align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total point</th>
                                                        <th className="px-6 bg-orange-500  align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{third.point_experience}</th>
                                                    </tr>
                                                    <tr>
                                                        <th className="px-6 bg-teal-300 text-blueGray-600 align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total projets</th>
                                                        <th className="px-6 bg-orange-500  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{third.nombre_projet}</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div> 
                                </div>
                        </div>
                        )}
                        {forth &&(
                        <div className="relative flex flex-col w-1/5 break-words bg-teal-200 rounded mt-1/8 xl:mb-0 shadow-lg">
                                <div className=" w-full">
                                        <div className="relative w-10/12 pr-4 max-w-full flex-grow flex-1">
                                        <span className = "h-12 w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                                                <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = { forth.pdc?forth.pdc: require("../../assets/img/team-1-800x800.jpg").default }/> 
                                            </span>
                                            <span className="font-semibold text-xl text-blueGray-700">
                                                {forth.prenom}
                                            </span>
                                        </div>   
                                        <div className="w-full"> 
                                            <table className="w-full bg-transparent border-collapse">
                                                <thead>
                                                    <tr>
                                                        <th className="px-6 bg-teal-200 text-blueGray-600 align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Rang</th>
                                                        <th className="px-6 bg-orange-500  align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">4</th>
                                                    </tr>
                                                    <tr>
                                                        <th className="px-6 bg-teal-200 text-blueGray-600 align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total point</th>
                                                        <th className="px-6 bg-orange-500  align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{forth.point_experience}</th>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th className="px-6 bg-teal-200 text-blueGray-600 align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total projets</th>
                                                        <th className="px-6 bg-orange-500  align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{forth.nombre_projet}</th>
                                                        
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div> 
                                </div>
                        </div>
                        )}
                        {fifth &&(
                        <div className="relative flex flex-col w-1/5 break-words bg-zinc-300 rounded mt-1/10 xl:mb-0 shadow-lg">
                                <div className=" w-full">
                                        <div className="relative w-10/12 pr-4 max-w-full flex-grow flex-1">
                                            <span className = "h-12 w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                                                <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = {fifth.pdc ?fifth.pdc: require("../../assets/img/team-1-800x800.jpg").default }/> 
                                            </span>
                                            <span className="font-semibold text-xl text-blueGray-700">
                                                {fifth.prenom}
                                            </span>
                                        </div>   
                                        <div className="w-full"> 
                                            <table className="w-full bg-transparent border-collapse">
                                                <thead>
                                                    <tr>
                                                        <th className="px-6 bg-zinc-300 text-blueGray-600 align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Rang</th>
                                                        <th className="px-6 bg-orange-500  align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">5</th>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th className="px-6 bg-zinc-300 text-blueGray-600 align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total point</th>
                                                        <th className="px-6  bg-orange-500 align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{fifth.point_experience}</th>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th className="px-6 bg-zinc-300 text-blueGray-600 align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total projets</th>
                                                        <th className="px-6  bg-orange-500 align-middle border border-solid border-blueGray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{fifth.nombre_projet}</th>
                                                        
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div> 
                                </div>
                        </div>
                        )}
                    </div>
            </section>
          </div>
     )
}