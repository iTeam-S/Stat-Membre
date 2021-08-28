import React from "react";

export default function Register() {
    return ( 
        <>
            <div className = "container mx-auto px-4 h-full" >
                <div className = "flex content-center items-center justify-center h-full" >
                    <div className = "w-full lg:w-6/12 px-4" >
                        <div className = "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0" >
                            <div className = "rounded-t mb-0 px-6 py-6" >
                                <div className = "text-center mb-3" >
                                    <h6 className = "text-blueGray-500 text-sm font-bold" >Ajouter un Projet</h6> 
                                </div> 
                                {/*<div className = "btn-wrapper text-center" >
                                    <button className = "bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type = "button" >
                                        <img alt = "..." className = "w-5 mr-1" src = { require("assets/img/github.svg").default }/>Github </button> 
                                    <button className = "bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type = "button" >
                                        <img alt = "..." className = "w-5 mr-1" src = { require("assets/img/google.svg").default }/>Google </button> 
                                </div> 
                                <hr className = "mt-6 border-b-1 border-blueGray-300" />*/}
                            </div> 
                            <div className = "flex-auto px-4 lg:px-10 py-10 pt-0" >
                                {/*<div className = "text-blueGray-400 text-center mb-3 font-bold" >
                                    <small > Or </small> 
                                </div> */}
                                <form>
                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" >Nom </label> 
                                        <input type = "text" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"placeholder = "Votre nom" />
                                     </div>

                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" >Prenom </label> 
                                        <input type = "text" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"placeholder = "Votre Prenom" />
                                    </div>

                                    
                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" >Spécialité </label> 
                                        <input type = "email" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "Votre Spécialité" />
                                    </div>

                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" >Projet </label> 
                                        <input type = "password" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "Nom de votre projet" />
                                    </div>

                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" >Impact Projet </label> 
                                        <select className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                            <option value="1">Debutant</option>
                                            <option value="2">Amateur</option>
                                            <option value="3">Normal</option>
                                            <option value="4">Haut Niveau</option>
                                            <option value="5">Legende</option>
                                        </select>
                                     </div>

                                     <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" >Difficulté </label> 
                                        <select className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                            <option value="1">Debutant</option>
                                            <option value="2">Amateur</option>
                                            <option value="3">Normal</option>
                                            <option value="4">Haut Niveau</option>
                                            <option value="5">Legende</option>
                                        </select>
                                     </div>

                                     <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" >Implication </label> 
                                        <select className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                            <option value="1">Debutant</option>
                                            <option value="2">Amateur</option>
                                            <option value="3">Normal</option>
                                            <option value="4">Haut Niveau</option>
                                            <option value="5">Legende</option>
                                        </select>
                                     </div>

                                     <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" >DeadLine </label> 
                                        <select className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                            <option value="1">Debutant</option>
                                            <option value="2">Amateur</option>
                                            <option value="3">Normal</option>
                                            <option value="4">Haut Niveau</option>
                                            <option value="5">Legende</option>
                                        </select>
                                     </div>

                                    <div className = "text-center mt-6" >
                                        <button className = "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type = "button" >Valider</button> 
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