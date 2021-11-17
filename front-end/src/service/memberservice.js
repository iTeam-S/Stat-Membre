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
     }

}

export default new MemberService();