import React,{useState} from "react";
import {useHistory} from "react-router";
import {AuthService} from "../../utils/service/authservice"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';



// components

import Navbar from "../../components/Navbars/AuthNavbar.js";
import FooterSmall from "../../components/Footers/FooterSmall.js";


export default function Login() {
  const [errer,setErrer]=useState(false)
  const [errormessage,setErrorMessage]=useState("");
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters')
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  let history=useHistory()

  const onSubmit = (data)=> {
        try {
            AuthService.login(data.email,data.password).then(
                (response) => {
                    if(response.role==="admin"){
                      history.push("/admin/dashboard")
                    }else if(response.role==="user"){
                      history.push("/")
                    }else{
                      setErrer(true)
                       setErrorMessage('Verifiez votre email et mot de passe');
                    }
                })
        } catch (error) {
          setErrer(true)
          console.log(error);
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
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "mail" >Email </label> 
                                        <input name="email" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  placeholder = "Email" {...register('email')}/>
                                        <p className="text-red-500 italic">{errors.email?.message}</p>
                                    </div>
                                    <div className = "relative w-full mb-3" >
                                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor = "password" >Password </label> 
                                        <input type="password" name="password" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  placeholder = "password" {...register('password')}/>
                                        <p className="text-red-500 italic">{errors.password?.message}</p>
                                    </div>
                                    <div>
                                        <label className = "inline-flex items-center cursor-pointer" >
                                        <input id = "customCheckLogin" type = "checkbox" className = "form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" /><span className = "ml-2 text-sm font-semibold text-blueGray-600" >Remember me </span> </label> 
                                    </div>

                                    <div className = "text-center mt-6" >
                                        <input  type="submit" className = "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" value="Sign In"/> 
                                    </div>
                                    {errer &&(
                                    <div className="bg-rose-300 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                        <strong className="font-bold">Erreur!</strong>
                                            <span className="block sm:inline">{errormessage} </span>
                                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                        <svg onClick={()=>{setErrer(false)}} className="fill-current h-5 w-12 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
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
