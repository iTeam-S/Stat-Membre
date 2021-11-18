import React,{useState,useEffect,useRef} from "react";
import MemberService from "../service/memberservice";



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
            <section className="mt-12">
                    <h3 className="text-3xl mb-2 font-semibold text-center text-blueGray-600">
                        TOP 5 
                    </h3>
                    <div className="px-4 py-4  rounded-lg ml-5 flex flex-no-wrap bg-blueGray-700 container mx-auto px-4 h-full border-blueGray-50">
                        {first &&(
                        <div className="relative flex flex-col min-w-0 break-words bg-green-400 rounded mt-1/2  shadow-lg">
                                <div className=" w-full">
                                        <div className="relative w-10/12 pr-4 max-w-full flex-grow flex-1">
                                            <span className = "h-12 w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                                                <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = {first.pdc?first.pdc: require("../assets/img/team-1-800x800.jpg").default }/>
                                            </span>
                                            <span className="font-semibold text-xl text-blueGray-700">
                                                {first.nom} {first.prenom}
                                            </span>
                                        </div> 
                                        <div class="w-full"> 
                                            <table className="w-full bg-transparent border-collapse">
                                                <thead>
                                                    <tr>
                                                        <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Rang</th>
                                                        <th className="px-6 bg-teal-500 bg-orange-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">1</th>
                                                    </tr>
                                                    <tr>
                                                        <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total_point</th>
                                                        <th className="px-6 bg-teal-500 bg-orange-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{first.point_experience}</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div> 
                                </div>
                                
                        </div>
                        )}
                        {second &&(
                        <div className="relative flex flex-col min-w-0 break-words bg-green-300 rounded mt-1/4 xl:mb-0 shadow-lg">
                                <div className=" w-full">
                                        <div className="relative w-10/12 pr-4 max-w-full flex-grow flex-1">
                                            <span className = "h-12 w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                                                <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = {second.pdc?second.pdc: require("assets/img/team-1-800x800.jpg").default }/> 
                                            </span>
                                            <span className="font-semibold text-xl text-blueGray-700">
                                                {second.nom} {second.prenom}
                                            </span>
                                        </div>   
                                        <div class="w-full"> 
                                            <table className="w-full bg-transparent border-collapse">
                                                <thead>
                                                    <tr>
                                                        <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Rang</th>
                                                        <th className="px-6 bg-teal-500 bg-orange-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">2</th>
                                                    </tr>
                                                    <tr>
                                                        <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total_point</th>
                                                        <th className="px-6  bg-orange-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{second.point_experience}</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div> 
                                </div>
                        </div>
                        )}
                        {third &&(
                        <div className="relative flex flex-col min-w-0 break-words bg-green-200 rounded mt-1/6 xl:mb-0 shadow-lg">
                                <div className=" w-full">
                                        <div className="relative w-10/12 pr-4 max-w-full flex-grow flex-1">
                                            <span className = "h-12 w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                                                <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = { third.pdc?third.pdc: require("assets/img/team-1-800x800.jpg").default }/> 
                                            </span>
                                            <span className="font-semibold text-xl text-blueGray-700">
                                                {third.nom} {third.prenom}
                                            </span>
                                        </div>   
                                        <div class="w-full"> 
                                            <table className="w-full bg-transparent border-collapse">
                                                <thead>
                                                    <tr>
                                                        <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Rang</th>
                                                        <th className="px-6 bg-orange-500  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">3</th>
                                                    </tr>
                                                    <tr>
                                                        <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total_point</th>
                                                        <th className="px-6 bg-orange-500  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{third.point_experience}</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div> 
                                </div>
                        </div>
                        )}
                        {forth &&(
                        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mt-1/8 xl:mb-0 shadow-lg">
                                <div className=" w-full">
                                        <div className="relative w-10/12 pr-4 max-w-full flex-grow flex-1">
                                            <span className = "h-auto w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                                                <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = {forth.pdc?forth.pdc: require("assets/img/team-1-800x800.jpg").default }/> 
                                            </span>
                                            <span className="font-semibold text-xl text-blueGray-700">
                                                {forth.nom} {forth.prenom}
                                            </span>
                                        </div>   
                                        <div class="w-full"> 
                                            <table className="w-full bg-transparent border-collapse">
                                                <thead>
                                                    <tr>
                                                        <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Rang</th>
                                                        <th className="px-6 bg-orange-500  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">4</th>
                                                    </tr>
                                                    <tr>
                                                        <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total_point</th>
                                                        <th className="px-6 bg-orange-500  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{forth.point_experience}</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div> 
                                </div>
                        </div>
                        )}
                        {fifth &&(
                        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mt-1/10 xl:mb-0 shadow-lg">
                                <div className=" w-full">
                                        <div className="relative w-10/12 pr-4 max-w-full flex-grow flex-1">
                                            <span className = "h-12 w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                                                <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = {fifth.pdc ?fifth.pdc: require("assets/img/team-1-800x800.jpg").default }/> 
                                            </span>
                                            <span className="font-semibold text-xl text-blueGray-700">
                                                {fifth.nom} {fifth.prenom}
                                            </span>
                                        </div>   
                                        <div class="w-full"> 
                                            <table className="w-full bg-transparent border-collapse">
                                                <thead>
                                                    <tr>
                                                        <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Rang</th>
                                                        <th className="px-6 bg-orange-500  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">5</th>
                                                    </tr>
                                                    <tr>
                                                        <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total_point</th>
                                                        <th className="px-6  bg-orange-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{fifth.point_experience}</th>
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