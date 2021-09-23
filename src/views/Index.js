/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
    return ( 
        <>
            <IndexNavbar fixed/>
            <section className = "header relative pt-16 items-center flex h-screen max-h-860-px" >
                <div className = "container mx-auto items-center flex flex-wrap" >
                    <div className = "w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4" >
                        <div className = "pt-32 sm:pt-0" >
                            <h2 className = "font-semibold text-4xl text-blueGray-600" >Bienvenue sur Iteam - $ stats </h2> 
                            <p className = "mt-4 text-lg leading-relaxed text-blueGray-500" >Sur cette site web, ovus pouvez trouvez les statistiques des membres dans 
                                <a href = "https://Iteam-$.mg" className = "text-blueGray-600" target = "_blank" >Iteam - $ </a>.C 'est un groupe de jeune développeur. 
                            </p> 
                            <div className = "mt-12" >
                                <a href = "https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index" target = "_blank" className = "get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150" >Get started </a> 
                                <a href = "https://github.com/Iteams" className = "github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150" target = "_blank" >Github Star </a> 
                            </div> 
                        </div> 
                    </div> 
                </div>

                <img className = "absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px" src = { require("assets/img/pattern_react.png").default } alt = "..." />
            </section>

            <section className = "mt-48 md:mt-40 pb-40 relative bg-blueGray-100" >
                <div className = "-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
                    style = {
                        { transform: "translateZ(0)" } } >
                    <svg className = "absolute bottom-0 overflow-hidden" xmlns = "http://www.w3.org/2000/svg" preserveAspectRatio = "none"
                        version = "1.1"
                        viewBox = "0 0 2560 100"
                        x = "0"
                        y = "0" >
                        <polygon className = "text-blueGray-100 fill-current" points = "2560 0 2560 100 0 100" ></polygon> 
                    </svg> 
                </div> 
                <div className = "container mx-auto" >
                    <div className = "flex flex-wrap items-center" >
                        <div className = "w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32" >
                            <div className = "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg" >
                                <img alt = "..." src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                                        className = "w-full align-middle rounded-t-lg"/>
                                <blockquote className = "relative p-8 mb-4" >
                                    <svg preserveAspectRatio = "none" xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 583 95" className = "absolute left-0 w-full block h-95-px -top-94-px" >
                                        <polygon points = "-30,95 583,95 583,65" className = "text-lightBlue-500 fill-current" ></polygon> 
                                    </svg> 
                                    <h4 className = "text-xl font-bold text-white" >Great for your awesome project </h4> 
                                    <p className = "text-md font-light mt-2 text-white" >Putting together a page has never been easier than matching together pre - made components.From landing pages presentation to login areas, you can easily customise and built your pages. </p> 
                                </blockquote> 
                            </div> 
                        </div>

                        <div className = "w-full md:w-6/12 px-4" >
                            <div className = "flex flex-wrap" >
                                <div className = "w-full md:w-6/12 px-4" >
                                    <div className = "relative flex flex-col mt-4" >
                                        <div className = "px-4 py-5 flex-auto" >
                                            <div className = "text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white" >
                                                <i className = "fas fa-sitemap" > </i> 
                                            </div> 
                                            <h6 className = "text-xl mb-1 font-semibold" >Application Web </h6> 
                                            <p className = "mb-4 text-blueGray-500" >Projet application web </p> 
                                        </div> 
                                    </div> 
                                    <div className = "relative flex flex-col min-w-0" >
                                        <div className = "px-4 py-5 flex-auto" >
                                            <div className = "text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white" >
                                                <i className = "fas fa-drafting-compass" > </i> 
                                            </div> 
                                            <h6 className = "text-xl mb-1 font-semibold" >Application Mobile </h6> 
                                            <p className = "mb-4 text-blueGray-500" >Projet Apps </p> 
                                        </div> 
                                    </div> 
                                </div> 
                                <div className = "w-full md:w-6/12 px-4" >
                                    <div className = "relative flex flex-col min-w-0 mt-4" >
                                        <div className = "px-4 py-5 flex-auto" >
                                            <div className = "text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white" >
                                                <i className = "fas fa-newspaper" > </i> 
                                            </div> 
                                            <h6 className = "text-xl mb-1 font-semibold" > SIte vitrine </h6> 
                                            <p className = "mb-4 text-blueGray-500" >E - commerce </p> 
                                        </div> 
                                    </div> 
                                    <div className = "relative flex flex-col min-w-0" >
                                        <div className = "px-4 py-5 flex-auto" >
                                            <div className = "text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white" >
                                                <i className = "fas fa-file-alt" > </i> 
                                            </div> 
                                            <h6 className = "text-xl mb-1 font-semibold" >Others </h6> 
                                            <p className = "mb-4 text-blueGray-500" >Other projet </p> 
                                        </div> 
                                    </div> 
                                </div>              
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </section>

            <section className = "block relative z-1 bg-blueGray-600" >
                <div className = "container mx-auto" >
                    <div className = "justify-center flex flex-wrap" >
                        <div className = "w-full lg:w-12/12 px-4  -mt-24" >
                            <div className = "flex flex-wrap" >
                                <div className = "w-full lg:w-4/12 px-4" >
                                    <h5 className = "text-xl font-semibold pb-4 text-center" >Register projet</h5> 
                                    <Link to = "/auth/register" >
                                        <div className = "hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150" >
                                            <img alt = "..." className = "align-middle border-none max-w-full h-auto rounded-lg" src = { require("assets/img/register.png").default }/> 
                                        </div> 
                                    </Link> 
                                </div>

                                <div className = "w-full lg:w-4/12 px-4" >
                                    <h5 className = "text-xl font-semibold pb-4 text-center" >Projet </h5> 
                                    <Link to = "/profile" >
                                        <div className = "hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150" >
                                            <img alt = "..." className = "align-middle border-none max-w-full h-auto rounded-lg" src = { require("assets/img/profile.jpg").default }/> 
                                        </div> 
                                    </Link> 
                                </div>

                                <div className = "w-full lg:w-4/12 px-4" >
                                    <h5 className = "text-xl font-semibold pb-4 text-center" >Equipe Iteam-$ </h5> 
                                    <Link to = "/landing" >
                                        <div className = "hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150" >
                                            <img alt = "..." className = "align-middle border-none max-w-full h-auto rounded-lg" src = { require("assets/img/equipe.png").default }/> 
                                        </div> 
                                    </Link> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </section>

            <section className = "py-10 bg-blueGray-600 overflow-hidden" >
                <div className = "container mx-auto pb-64" ></div> 
            </section> 
            <Footer/>
        </>
    );
}