<<<<<<< HEAD
import React,{useState,useEffect} from "react";
import {MemberAxios} from "../apis/Stat"



class MemberService{
     getTopFive(){
          return MemberAxios.get("/point/gettopfive").then(response=>{
               return response;
          })
=======
import React from "react";
import {MemberAxios} from "../apis/Stat";


class MemberService{
     addMember(membername,projectname){
          try {
          return MemberAxios.post("/addMember",{
               membername,
               projectname
          }) 
           } catch (error) {
               console.log(error);
               
           };
>>>>>>> bd656c87ad3b4f9421b088c8404e7449cad15c75
     }

}

<<<<<<< HEAD
export default new MemberService;
=======
export default new MemberService();
>>>>>>> bd656c87ad3b4f9421b088c8404e7449cad15c75
