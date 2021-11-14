import React,{useState} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {AuthAxios} from "../../apis/Stat";
import PropTypes from "prop-types";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {useHistory} from "react-router";
import { isEmail } from "validator";
import AuthService from "../../service/authservice"

// components

import Navbar from "../../components/Navbars/AuthNavbar.js";
import FooterSmall from "../../components/Footers/FooterSmall.js";


export default function Login() {
    let history=useHistory()
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [loadind,setLoading]=useState(false);
    const [message,setMessage]=useState("");
  
    const handleSignin=()=>{
        try {
            AuthService.login(email,password).then(
                () => {
                  history.push("/");
                  window.location.reload();
                },
                error => {
                  const resMessage =
                    (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                    error.message ||
                    error.toString();
                setLoading(false);
                setMessage(resMessage)
                }
              );
        } catch (error) {
            setLoading(false);
            
        }
    }

    const required = value => {
        if (!value) {
          return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              This field is required!
            </div>
          );
        }
      };
      
      const mail = value => {
        if (!isEmail(value)) {
          return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              This is not a valid email.
            </div>
          );
        }
      };
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

              
            
               <div className = "container mx-auto px-4 h-full">
                <div className = "flex content-center items-center justify-center h-full">
                    <div className = "w-full lg:w-4/12 px-4">
                        <div className = "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                            <div className = "rounded-t mb-0 px-6 py-6">
                                <div className = "text-center mb-3">
                                    <h6 className = "text-blueGray-500 text-sm font-bold">Connexion </h6> 
                                </div> 
                                
                                <hr className = "mt-6 border-b-1 border-blueGray-300" />
                            </div> 
                            <div className = "flex-auto px-4 lg:px-10 py-10 pt-0" >
                                <form>
                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "mail" >Email </label> 
                                        <input type = "email" id="mail" value={email} onChange={e=>setEmail(e.target.value)} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" validations={[required, mail]} placeholder = "Email" />
                                    </div>

                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "pass" >Password </label> 
                                        <input type = "password" id="pass" value={password} onChange={e=>setPassword(e.target.value)} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" validations={[required, mail]} placeholder = "Password" />
                                    </div> 
                                    <div>
                                        <label className = "inline-flex items-center cursor-pointer" >
                                        <input id = "customCheckLogin" type = "checkbox" className = "form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" /><span className = "ml-2 text-sm font-semibold text-blueGray-600" >Remember me </span> </label> 
                                    </div>

                                    <div className = "text-center mt-6" >
                                        <button onClick={handleSignin} className = "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type = "button" >Sign In </button> 
                                    </div> 
                                    {!message =="" && (
                                    <div class="bg-red-500 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                      <strong class="font-bold">Errer!</strong>
                                          <span class="block sm:inline bg-red-500 text-white">{message}</span>
                                          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                                        <svg class="fill-current h-2 w-2 text-white" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                                      </span>
                                    </div>
                                    )}
                                </form> 
                            </div> 
                        </div> 
                        <div className = "flex flex-wrap mt-6 relative" >
                            <div className = "w-1/2" >
                                <a href = "#pablo" onClick = {
                                    (e) => e.preventDefault() }
                                    className = "text-blueGray-200" >
                                <small > Forgot password ? </small> </a> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div> 
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
