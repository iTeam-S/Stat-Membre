import React,{useState,useEffect} from "react";
import axios from "axios";

// components

import Navbar from "../../components/Navbars/AuthNavbar.js";
import Footer from "../../components/Footers/Footer.js";
import MemberService from "../../utils/service/memberservice"


export default function Streak({data}) {
    const [members,setMembers]=useState([]);
    const [memberzero,setMemberzero]=useState({});

    useEffect(()=>{
        MemberService.getListMember().then(response=>{
            setMembers(response.data)
            setMemberzero(response.data[0]);
        });
        
    },[]);

    const streak_url = "https://github-readme-streak-stats.herokuapp.com/?theme=vue&ring=D96098&fire=D96098&user= ";

    return ( 
        <>
            <Navbar />
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
                                    <h1 className = "text-white font-semibold text-5xl" style={styles.titre}>Statistique sur github </h1> 
                                    <p className = "mt-4 text-lg text-blueGray-100" style={styles.titre}>Voici les Streak de tous les membres dans iTeam-$ </p> 
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
                <div style={styles.streak}>
                    {members.map((member) => (
                        <div style={styles.content_streak}>
                            <p style={styles.nom_user}>{member.prenom}</p>
                            <img
                                alt={member.prenom}
                                src= { streak_url.trim() + member.user_github }
                                className="rounded-t-lg"
                            />
                        </div>  
                    ))}
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

const styles = {
    streak: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        flexWrap: 'wrap',
        position: 'relative',
        margin: '50px 0px'
    },
    content_streak: {
        width: '500px',
        margin: '15px 0px'
    },
    nom_user: {
        textAlign: 'center',
        fontSize: '22px',
        fontWeight: 'bold'
    },
    titre: {
        color: '#325288'
    }
}