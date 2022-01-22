import React from "react";
import { useParams } from "react-router";


// components

export default function Settings({data}) {
    const {prenom}=useParams();
    return ( 
        <>
            <div className = "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" >
                <div className = "rounded-t bg-white mb-0 px-6 py-6" >
                    <div className = "text-center flex justify-between" >
                        <h6 className = "text-blueGray-700 text-xl font-bold" > My account </h6> 
                        <button className = "bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type = "button" >Enregistrer </button> 
                    </div> 
                </div> 
                <div className = "flex-auto px-4 lg:px-10 py-10 pt-0" >
                {
                         data
                         .filter((membre) => membre.prenom ===prenom)
                         .map((membre) => (
                    <form >
                        <h6 className = "text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase" >User Information 
                        </h6>
                        <div className = "flex flex-wrap" >
                            <div className = "w-full lg:w-6/12 px-4" >
                                <div className = "relative w-full mb-3" >
                                    <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" >
                                        prénom usuelle </label> 
                                    <input type = "text" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue = {membre.prenom} />
                                </div> 
                            </div> 
                            <div className = "w-full lg:w-6/12 px-4" >
                                <div className = "relative w-full mb-3" >
                                    <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" >
                                        Email </label> 
                                    <input type = "email" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            defaultValue = {membre.mail} />
                                </div> 
                            </div> 
                            <div className = "w-full lg:w-6/12 px-4" >
                                <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" >
                                            Nom </label> 
                                        <input type = "text" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            defaultValue = {membre.nom} />
                                </div> 
                            </div> 
                            <div className = "w-full lg:w-6/12 px-4" >
                                <div className = "relative w-full mb-3" >
                                    <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" > Prénom </label> 
                                    <input type = "text" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue = {membre.prenom} />
                                </div> 
                            </div> 
                        </div>

                        <hr className = "mt-6 border-b-1 border-blueGray-300" />

                        <h6 className = "text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase" >Contact Information </h6> 
                        <div className = "flex flex-wrap" >
                            <div className = "w-full lg:w-12/12 px-4" >
                                <div className = "relative w-full mb-3" >
                                    <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" >Adresse </label> 
                                    <input type = "text" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue = "Antananarivo" />
                                </div> 
                            </div> 
                            <div className = "w-full lg:w-4/12 px-4" >
                                <div className = "relative w-full mb-3" >
                                    <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" > Ville </label> 
                                    <input type = "email" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue = "Antananarivo" />
                                </div> 
                            </div> 
                            <div className = "w-full lg:w-4/12 px-4" >
                                <div className = "relative w-full mb-3" >
                                    <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" > Pays </label> 
                                    <input type = "text" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                         defaultValue = "Madagascar" />
                                </div> 
                            </div> 
                            <div className = "w-full lg:w-4/12 px-4" >
                                <div className = "relative w-full mb-3" >
                                    <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" > Telephone </label> 
                                    <input type = "text" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue = {membre.tel} />
                                </div> 
                            </div> 
                        </div>

                        <hr className = "mt-6 border-b-1 border-blueGray-300" />

                        <h6 className = "text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase" >A propos </h6> 
                        <div className = "flex flex-wrap" >
                            <div className = "w-full lg:w-12/12 px-4" >
                                <div className = "relative w-full mb-3" >
                                    <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "grid-password" > A propos de moi </label> 
                                    <textarea type = "text" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue = "Developpeur" rows = "4" >
                                    </textarea> 
                                </div> 
                            </div> 
                        </div> 
                    </form> 
                    ))}
                </div> 
            </div> 
        </>
    );
}