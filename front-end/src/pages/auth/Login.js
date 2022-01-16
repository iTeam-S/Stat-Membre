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
                  }else{
                    history.push("/")
                  }
                  ;
                },
              );
        } catch (error) {
          setErrer(true)
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
