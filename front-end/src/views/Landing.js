import React,{useState,useEffect,useRef} from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import FooterSmall from "../components/Footers/FooterSmall.js";
import MemberService from "../service/memberservice"


export default function Landing({data}) {
    const [members,setMembers]=useState([]);
    const [memberzero,setMemberzero]=useState({});

    useEffect(()=>{
        MemberService.getListMember().then(response=>{
            setMembers(response.data)
            setMemberzero(response.data[0]);
        });
        
    },[])
    return ( 
        <>
            <Navbar transparent/>
            <main >
                <div className = "relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75" >
                    <div className = "absolute top-0 w-full h-full bg-center bg-cover"
                            style = {
                                {
                                    backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
                                }} >
                            <span id = "blackOverlay" className = "w-full h-full absolute opacity-75 bg-black" ></span> 
                    </div> 
                    <div className = "container relative mx-auto" >
                        <div className = "items-center flex flex-wrap" >
                            <div className = "w-full lg:w-6/12 px-4 ml-auto mr-auto text-center" >
                                <div className = "pr-12" >
                                    <h1 className = "text-white font-semibold text-5xl" >Les équipes dans Iteam - $. </h1> 
                                    <p className = "mt-4 text-lg text-blueGray-200" >Vous pouvez voir ici tous les développeurs chez Iteam - $ avec leur compétences, projets en cours. </p> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                    <div className = "top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                            style = {
                                { transform: "translateZ(0)" } } >
                        <svg className = "absolute bottom-0 overflow-hidden" xmlns = "http://www.w3.org/2000/svg" preserveAspectRatio = "none"
                                version = "1.1"
                                viewBox = "0 0 2560 100"
                                x = "0"
                                y = "0" >
                            <polygon className = "text-blueGray-200 fill-current" points = "2560 0 2560 100 0 100" ></polygon>
                        </svg> 
                    </div> 
                </div>
                <section>
                    <div className="block relative z-1  pb-48 mx-1/5 ">
                    <div className = "py-4 rounded-lg flex flex-wrap  container mx-auto px-48 h-full border-blueGray-50" >
                        <div className = "flex  flex-wrap " >
                            <div className = "w-full" >
                                <div className = "w-full container flex flex-wrap pt-2" style={ {margin: '10px 15px'} } >
                                {members.map((member=>(
                                    <div key={member.id} className = "w-3/5 ml-1/40 mt-1/2 h-1/2" >
                                        <div className="w-full max-w-sm rounded overflow-hidden shadow-lg">
                                        <img alt = "..." className = "w-full  align-middle border-none shadow-lg" src = {member.pdc?member.pdc:("https://h5ckfun.info/wp-content/uploads/2015/07/MyAvatar.png") }/>
                                            <div className="px-5 py-4">
                                                <p className="text-center font-bold text-xl ">{member.nom}</p>
                                                <p className="text-center font-bold text-xl ">{member.prenom}</p>
                                            </div>
                                            <div className="w-full">
                                            <table className="w-full bg-transparent
                                            border-collapse">
                                                <thead>
                                                    <tr>
                                                        <th className="px-6 bg-teal-500  align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Rang</th>
                                                        <th className="px-6 bg-orange-500 text-white  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{(members.indexOf(member))+1}</th>
                                                    </tr>
                                                    <tr>
                                                        <th className="px-6 bg-teal-500  align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total point</th>
                                                        <th className="px-6  bg-orange-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{member.point_experience}</th>
                                                    </tr>
                                                    <tr>
                                                        <th className="px-6 bg-teal-500  align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total projet</th>
                                                        <th className="px-6  bg-orange-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{member.nombre_projet}</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                            </div>
                                        </div>
                                    </div>
                                    )))}
                                </div> 
                            </div>
                        </div> 
                    </div>
                </div>
            </section>      
                           
                        



                <section className = "pb-20 relative block bg-blueGray-800" >

                    <div className = "container mx-auto px-4 lg:pt-24 lg:pb-64" >
                        <div className = "flex flex-wrap text-center justify-center" >
                            <div className = "w-full lg:w-6/12 px-4">
                                <h2 className = "text-4xl font-semibold text-white" >Nous sommes toujours disponible pour votre projet</h2> 
                            </div>  
                        </div> 
                    </div> 
                </section> 
                <section className = "relative block py-24 lg:pt-0 bg-blueGray-800" >
                    <div className = "container mx-auto px-4" >
                        <div className = "flex flex-wrap justify-center lg:-mt-64 -mt-48" >
                            <div className = "w-full lg:w-6/12 px-4" >
                                <div className = "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200" >
                                    <div className = "flex-auto p-5 lg:p-10" >
                                        <h4 className = "text-2xl font-semibold" >Vous voulez travaillez avec nous ?</h4> 
                                        <p className = "leading-relaxed mt-1 mb-4 text-blueGray-500" >Remplissez ce formulaire et nous vous répondrons dans les 24 heures </p> 
                                        <div className = "relative w-full mb-3 mt-8" >
                                            <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "full-name" >Votre nom </label> 
                                            <input type = "text" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "nom complet" />
                                        </div>

                                        <div className = "relative w-full mb-3" >
                                            <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "email" >Email </label> 
                                            <input type = "email" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"placeholder = "Email" />
                                        </div>

                                        <div className = "relative w-full mb-3" >
                                            <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "message" >Message </label> 
                                            <textarea rows = "4" cols = "80" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"placeholder = "Ecrivez votre message..." />
                                        </div> 
                                        <div className = "text-center mt-6" >
                                            <button className = "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"type = "button" >Envoyez Message </button> 
                                        </div> 
                                    </div> 
                                </div> 
                            </div> 
                        </div>
                    </div>  
                </section> 
            </main> 
            <Footer/>
        </>
    );
}