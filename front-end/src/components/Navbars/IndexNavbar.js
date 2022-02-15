/*eslint-disable*/
import React,{ useState} from "react";
import {Link} from "react-router-dom"




import {AuthService} from "../../utils/service/authservice"


// components

import IndexDropdown from "../../components/Dropdowns/IndexDropdown.js";
import UserDropdown from "../../components/Dropdowns/UserDropdown.js"

export default function Navbar(props) {
    const User=AuthService.getCurrentUser();
    const user_prenom=(!(User===null)) ? User.username:null;
    const [navbarOpen, setNavbarOpen] = useState(false);
    return ( 
        <>
            <nav className = "top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-2 navbar-expand-lg bg-white shadow" >
                <div className = "container px-4 mx-auto flex flex-wrap items-center justify-between" >
                    <div className = "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start" >
                        <Link to = "/"className = "text-blueGray-700 text-sm font-bold leading-relaxed inline mr-3 py-2 whitespace-nowrap uppercase" >
                            <img style={{height: '50px', width: '50px', margin: '0px', padding: '0px'}} src = { require("assets/img/logo.png").default } alt = "..." />iTeam-$
                        </Link> 
                        <button className = "cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                type = "button"
                                onClick = {
                                 () => setNavbarOpen(!navbarOpen)}>
                                <i className = "fas fa-bars" > 
                                </i> 
                        </button> 
                    </div> 
                    <div className = {
                         "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                         (navbarOpen ? " block" : " hidden")
                         }
                            id = "example-navbar-warning" >

                        <ul className = "flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="flex items-center lg:text-blueGray-700  px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                            {(User == null) &&(
                            <Link to="/auth/login">
                                Se connecter
                            </Link>
                            )}
                            </li>
                            <li className="flex items-center lg:text-blueGray-700  px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                                <UserDropdown/>
                            </li>
                            <li className = "flex items-center">
                                 <IndexDropdown props={props}/>
                            </li> 
                            <li className = "flex items-center">
                                <a className = "hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                   href = "https://facebook.com/iTeam.Community?_rdc=1&_rdr"
                                    target = "_blank" >
                                <i className = "text-blueGray-400 fab fa-facebook text-lg leading-lg "/>
                                <span className = "lg:hidden inline-block ml-2" > Share </span> 
                                </a> 
                            </li>

                            <li className = "flex items-center">
                                <a className = "hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href = "https://iteam-s.mg/website/social/twitter"
                                    target = "_blank" >
                                    <i className = "text-blueGray-400 fab fa-twitter text-lg leading-lg "/>
                                <span className = "lg:hidden inline-block ml-2" > Tweet </span> 
                                </a> 
                            </li>
                            <li className = "flex items-center">
                                <a className = "hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                href = "https://github.com/iTeam-S"
                                target = "_blank" >
                                <i className = "text-blueGray-400 fab fa-github text-lg leading-lg "/>
                                <span className = "lg:hidden inline-block ml-2" > Star </span> </a> 
                            </li> 
                        </ul> 
                    </div> 
                </div> 
            </nav>
        </>
    );
}