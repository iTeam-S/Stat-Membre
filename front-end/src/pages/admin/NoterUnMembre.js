import React,{useContext} from "react";
import {useHistory} from "react-router"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useParams } from "react-router";

import Navbar from "../../components/Navbars/AuthNavbar.js";
import FooterSmall from "../../components/Footers/FooterSmall.js";
import {MemberContext} from "../../utils/context/MemberContext"
import MemberService from "../../utils/service/memberservice"


export default function NoterOne(){

  const {id_membre,id_projet}=useParams();
  const {members}=useContext(MemberContext);
  let history=useHistory();
     
     const validationSchema = Yup.object().shape({
          difficulte: Yup.number()
            .required(),
          deadline: Yup.number()
            .required(),
          implication: Yup.number()
            .required(),
          impact: Yup.number()
               .required()
        });
        const {
          register,
          handleSubmit,
          formState: { errors }
        } = useForm({
          resolver: yupResolver(validationSchema)
        });

     const handleNoterMember=async (data)=>{
       try {
         await MemberService.NoterUnMembre(data.difficulte,data.deadline,data.impact,data.implication,id_membre,id_projet)
         history.push(`/admin/valide/projet/${id_projet}`);
         
       } catch (error) {
         console.log(error.response.data.message);
         
       }
          
     }
     return(
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
          {
          members
          .filter((membre)=>membre.id==id_membre)
          .map((membre)=>(
          <div key={membre.id} className="relative flex flex-col mx-auto min-w-0 break-words bg-white w-1/4 mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6 ">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={membre.user_github_pic ? membre.user_github_pic:require("assets/img/team-1-800x800.jpg").default}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-1/10">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {membre.nom + " " + membre.prenom}
            </h3>
            
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
          <form onSubmit={handleSubmit(handleNoterMember)}>
            <div className = "relative w-full mb-3" >
              <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2"  htmlFor = "deadline" >Impact Projet </label> 
                <select name="impact"  {...register('impact')}  className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                  <option value="1">Debutant</option>
                  <option value="2">Amateur</option>
                  <option value="3">Normal</option>
                  <option value="4">Haut Niveau</option>
                  <option value="5">Legende</option>
                </select>
            </div>
            <div className = "relative w-full mb-3" >
              <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2"  htmlFor = "deadline" >Difficulté </label> 
                <select name='difficulte'  {...register('difficulte')}  className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                  <option value="1">Debutant</option>
                  <option value="2">Amateur</option>
                  <option value="3">Normal</option>
                  <option value="4">Haut Niveau</option>
                  <option value="5">Legende</option>
                </select>
            </div>
            <div className = "relative w-full mb-3" >
              <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2"  htmlFor = "deadline" >Implication  </label> 
                <select name='implication'  {...register('implication')} className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                  <option value="1">Debutant</option>
                  <option value="2">Amateur</option>
                  <option value="3">Normal</option>
                  <option value="4">Haut Niveau</option>
                  <option value="5">Legende</option>
                </select>
            </div>
            <div className = "relative w-full mb-3" >
              <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2"  htmlFor = "deadline" >DeadLine </label> 
                <select name="deadline" {...register('deadline')}  className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                  <option value="1">Debutant</option>
                  <option value="2">Amateur</option>
                  <option value="3">Normal</option>
                  <option value="4">Haut Niveau</option>
                  <option value="5">Legende</option>
                </select>
            </div>
            <div className = "text-center mt-6" >
              <input  type="submit" className = "bg-teal-700 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" value="Noter" />
            </div>
          </form>  
          </div>
        </div>
      </div> 
      ))}   
          <FooterSmall absolute />
        </section>
      </main>
    </>
  )
}