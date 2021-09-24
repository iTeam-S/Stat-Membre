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
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                <img
                                  alt="..."
                                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                                  className="w-full align-middle rounded-t-lg"
                                />
                                <blockquote className="relative p-8 mb-4">
                                  <svg
                                    preserveAspectRatio="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 583 95"
                                    className="absolute left-0 w-full block h-95-px -top-94-px"
                                  >
                                    <polygon
                                      points="-30,95 583,95 583,65"
                                      className="text-lightBlue-500 fill-current"
                                    ></polygon>
                                  </svg>
                                  <h4 className="text-xl font-bold text-white">
                                    Great for your awesome project
                                  </h4>
                                  <p className="text-md font-light mt-2 text-white">
                                    Putting together a page has never been easier than matching
                                    together pre-made components. From landing pages
                                    presentation to login areas, you can easily customise and
                                    built your pages.
                                  </p>
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

            <div className="flex flex-wrap items-center pt-32 pb-64">
                <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
                    <div className="justify-center flex flex-wrap relative">
                        <div className="my-4 w-full lg:w-6/12 px-4">
                                <a
                                    href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                                    target="_blank"
                                >
                                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                                      <img
                                        alt="..."
                                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                                      />
                                      <p className="text-lg text-white mt-4 font-semibold">
                                        Svelte
                                      </p>
                                    </div>
                                </a>
                                <a
                                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                                    target="_blank"
                                >
                                    <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                                      <img
                                        alt="..."
                                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                                      />
                                      <p className="text-lg text-white mt-4 font-semibold">
                                        ReactJS
                                      </p>
                                    </div>
                                </a>
                                <a
                                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                                    target="_blank"
                                >
                                    <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                                      <img
                                        alt="..."
                                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                                      />
                                      <p className="text-lg text-white mt-4 font-semibold">
                                        NextJS
                                      </p>
                                    </div>
                                </a>
                        </div>
                        <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                            <a
                                href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                                target="_blank"
                            >
                                <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                                  <img
                                    alt="..."
                                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                                  />
                                  <p className="text-lg text-white mt-4 font-semibold">
                                    JavaScript
                                  </p>
                                </div>
                            </a>
                            <a
                                href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                                target="_blank"
                            >
                                <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                                  <img
                                    alt="..."
                                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                                  />
                                  <p className="text-lg text-white mt-4 font-semibold">
                                    Angular
                                  </p>
                                </div>
                            </a>
                            <a
                                href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                                target="_blank"
                            >
                                <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                                  <img
                                    alt="..."
                                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                                  />
                                  <p className="text-lg text-white mt-4 font-semibold">
                                    Vue.js
                                  </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass text-xl"></i>
                    </div>
                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                        Javascript Components
                    </h3>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                        In order to create a great User Experience some components
                        require JavaScript. In this way you can manipulate the elements
                        on the page and give more options to your users.
                    </p>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                        We created a set of Components that are dynamic and come to help
                        you.
                    </p>
                    <div className="block pb-6">
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                            Alerts
                        </span>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                            Dropdowns
                        </span>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                          Menus
                        </span>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                          Modals
                        </span>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                          Navbars
                        </span>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                          Popovers
                        </span>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                          Tabs
                        </span>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                          Tooltips
                        </span>
                    </div>
                    <a
                        href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                        target="_blank"
                        className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                    >
                        View all{" "}
                        <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                    </a>
                </div>
            </div>

            <section className = "block relative z-1 bg-blueGray-600 pb-48" >
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

            
            <Footer/>
        </>
    );
}