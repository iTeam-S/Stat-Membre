import React,{useState} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {AuthAxios} from "../../apis/Stat";
import PropTypes from "prop-types";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {useHistory} from "react-router";
import { isEmail } from "validator";
import AuthService from "../../service/authservice";

// components

import Navbar from "../../components/Navbars/AuthNavbar.js";
import FooterSmall from "../../components/Footers/FooterSmall.js";



export default function SignUp() {
    const history=useHistory()
     const [prenom,setPrenom]=useState("");
     const [email,setEmail]=useState("");
     const [password,setPassword]=useState("");
     const [loading,setLoading]=useState(false);
     const [message,setMessage]=useState("");
     const [successfull,setSuccessfull]=useState(false);
    
     const handleSignup=()=>
      {
      try{
          const response= AuthService.register(prenom,email,password).then(
          () => {
            history.push("/");
            window.location.reload();
              
            setMessage(response.data.message);
            setSuccessfull(true);
          },
          error => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
  
            this.setState({
              successfull:false,
              message: resMessage
            });
          }
        );
  } catch (error) {
      setLoading(false);
      
  }
}
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          {!successfull && (
          <div className = "container mx-auto px-4 h-full">
                <div className = "flex content-center items-center justify-center h-full">
                    <div className = "w-full lg:w-4/12 px-4">
                        <div className = "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                            <div className = "rounded-t mb-0 px-6 py-6">
                                <div className = "text-center mb-3">
                                    <h6 className = "text-blueGray-500 text-sm font-bold">Sign_up</h6> 
                                </div> 
                                
                                <hr className = "mt-6 border-b-1 border-blueGray-300" />
                            </div> 
                            <div className = "flex-auto px-4 lg:px-10 py-10 pt-0" >
                                <form>
                                <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "prenom" >Prenom </label> 
                                        <input type = "text" id="prenom" onChange={e=> setPrenom(e.target.value)} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"placeholder = "votre prenom" />
                                    </div>
                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "email" >Email </label> 
                                        <input type = "email" id="email" onChange={e=>setEmail(e.target.value)} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"placeholder = "Email" />
                                    </div>

                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "password" >Password </label> 
                                        <input type = "password" id="password" onChange={e=>setPassword(e.target.value)} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder = "Password" />
                                    </div> 
                                    <div>
                                        <label className = "inline-flex items-center cursor-pointer" >
                                        <input id = "customCheckLogin" type = "checkbox" className = "form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" /><span className = "ml-2 text-sm font-semibold text-blueGray-600" >Remember me </span> </label> 
                                    </div>

                                    <div className = "text-center mt-6" >
                                        <button onClick={handleSignup} className = "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type = "button" >Sign Up </button> 
                                    </div> 
                                </form> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div> 
          )}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
