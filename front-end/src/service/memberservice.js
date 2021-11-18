import React,{useState,useEffect} from "react";
import {MemberAxios} from "../apis/Stat"



class MemberService{
     getTopFive(){
          return MemberAxios.get("/point/gettopfive").then(response=>{
               return response;
          })
     }

}

export default new MemberService;