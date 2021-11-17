import React from "react";
import {MemberAxios,ProjectAxios} from "../apis/Stat";


class MemberService{
     addMember(membername,projectname){
          try {
          return ProjectAxios.post("/addMember",{
               membername,
               projectname
          }) 
           } catch (error) {
               console.log(error);
               
           };
     }

}

export default new MemberService();
