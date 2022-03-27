import React, { useEffect } from "react";
import { Link} from "react-router-dom";
import {Link as Lscroll} from "react-scroll";
import { createPopper } from "@popperjs/core";
import { AuthService } from "utils/service/authservice";



const IndexDropdown = () => {
  const compte = AuthService.getCurrentUser();
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
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
  
  useEffect(()=>{
    const checkIfclicked=(e)=>{
      if(dropdownPopoverShow && btnDropdownRef.current){
        setDropdownPopoverShow(false)
      }
    }
    window.addEventListener("click",checkIfclicked);
    return ()=>{
      window.removeEventListener("click",checkIfclicked);
    }
  },[dropdownPopoverShow,btnDropdownRef])
  
  
  return (
    <>
      <a
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Menu
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-blueGray-200 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Stats page
        </span>
        <ul>
          <li
            className="cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >
            <Lscroll to="stat"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600} 
            onClick={(e) => {
              e.preventDefault();
              closeDropdownPopover();
            }}>
              Statistique
            </Lscroll>
          </li>
          <li className="cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
            <Lscroll to="top5"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            onClick={(e) => {
              e.preventDefault();
              closeDropdownPopover();
            }}>
              Top-5
            </Lscroll>
          </li>
        </ul>
        
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Project page
        </span>
        <ul>
        <li
          to="/views/public/projets"
          className="cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          <Lscroll to="projet" 
            spy={true}
            smooth={true}
            offset={-70}
            duration={1200}
            onClick={(e) => {
              e.preventDefault();
              closeDropdownPopover();
            }}>
              Tous les projets
            </Lscroll>
          
        </li>
        </ul>
        { compte !== null && (
           <Link
              to="/admin/project/addproject"
              className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            >
              Ajouter un projet
            </Link>
        )

        }
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Membres
        </span>
        <Link
          to="/views/public/memberlist"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Tous les Membres
        </Link>
        <Link
          to="/streak"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Streak github 
        </Link>

        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Admin section
        </span>
        <Link
          to="/admin/dashboard"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Dashboard
        </Link>
      </div>
    </>
  );
};

export default IndexDropdown;
