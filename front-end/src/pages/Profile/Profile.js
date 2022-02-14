/*eslint-disable*/
import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbars/AuthNavbar.js";
import Footer from "../../components/Footers/Footer.js";
import { MemberContext } from "../../utils/context/MemberContext.js";


export default function Profile() {
  const {members}=useContext(MemberContext)
    const { prenom } = useParams();

    return ( 
        <>
            <Navbar transparent/>
            <main className = "profile-page" >
                <section className = "relative block h-500-px" >
                    <div className = "absolute top-0 w-full h-full bg-center bg-cover"
                        style = {
                            {
                                backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
                            }
                        } >
                        <span id = "blackOverlay" className = "w-full h-full absolute opacity-50 bg-black" ></span> 
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
                </section> 
               <section className = "relative py-16 bg-blueGray-200" >
                    {
                        members
                        .filter((membre) => membre.prenom ===prenom)
                        .map((membre) => (
                            <div className="container mx-auto px-4">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                                  <div className="px-6">
                                    <div className="flex flex-wrap justify-center">
                                      <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                          <img
                                            alt="..."
                                            src={ membre.pdc }
                                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                          />
                                        </div>
                                      </div>
                                      <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                      </div>
                                      <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                          <div className="mr-4 p-3 text-center">
                                            <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                                                <a href="https://facebook.com/iTeam.Community?_rdc=1&_rdr" target="_blank" rel="noreferrer" ><i className = "fab fa-facebook" > </i> </a>
                                            </button>
                                          </div>
                                          <div className="mr-4 p-3 text-center">
                                            <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                                                <a href="https://github.com/iTeam-S" target="_blank" rel="noreferrer" ><i className = "fab fa-github" > </i> </a>
                                            </button>
                                          </div>
                                          <div className="mr-4 p-3 text-center">
                                            <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                                                <a href="https://iteam-s.mg/website/social/linkedin" target="_blank" rel="noreferrer" ><i className = "fab fa-linkedin" > </i> </a>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="text-center mt-12">
                                      <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                        { membre.prenom } { membre.nom }
                                      </h3>
                                      <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                                        Antananarivo, Madagascar
                                      </div>
                                      <div className="mb-2 text-blueGray-600 mt-10">
                                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                        { membre.fonction }
                                      </div>
                                    </div>
                                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                      <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                          <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                            {membre.presentation} 
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                        ))
                    }
                </section>


            </main> 
            <Footer/>
        </>
    );
}