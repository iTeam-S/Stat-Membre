import React,{useEffect,useState} from "react";
import { createPopper } from "@popperjs/core";
import AuthService from "../../service/authservice";
import {Link} from "react-router-dom";


const UserDropdown = () => {
    const User=AuthService.getCurrentUser();
    const [user_prenom,setPrenom]=useState("");
    if(!(User ==null)){
        setPrenom(User.username)
    }
    
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] =useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start",
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    const logOut=()=>{
        AuthService.logout();
    }
    return ( 
        <>
            <a className = "text-blueGray-500 block" href = "#pablo" ref = { btnDropdownRef }
                onClick = {
                    (e) => {
                        e.preventDefault();
                        dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                    }} >
                    {!(User == null) &&(
                    <div className = "items-center flex">
                        <span className = "h-12 w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                            <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = { require("assets/img/team-1-800x800.jpg").default }/> 
                        </span> 
                    
                    <h4 className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">{User.username}</h4>
                    </div>
                 )} 
            </a> 
            <div ref = { popoverDropdownRef } className = {
                (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-blueGray-200 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"} >
                    <Link className = 
                        "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
                        to={`/profile/${user_prenom}`}
                        >Mon Profil 
                    </Link> 
                    <Link  className ="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
                        to={`/settings/${user_prenom}`}
                        >Parametre 
                    </Link> 
                    <div className = "h-0 my-2 border border-solid border-blueGray-100" />
                    <a href = "/" className = {
                            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                }
                                onClick = {logOut} >Deconnexion 
                    </a> 
            </div>
        </>
    );
};

export default UserDropdown;