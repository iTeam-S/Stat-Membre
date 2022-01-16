import {MemberAxios} from "../apis/Stat"



class MemberService{
     getTopFive(){
          return MemberAxios.get("/point/gettopfive").then(function(response){
               return response;
          })
     }
     getListMember(){
          return MemberAxios.get("/getAll").then(response=>{
               return response;
          })
     }
     getOneMember(id){
          return MemberAxios.get(`/getonemember/${id}`).then(response=>{
               return response;
          })
     }
     getPdc(prenom){
          return MemberAxios.get(`/getpdc/${prenom}`).then(response=>{
               return response
          })
     }
     listmemberonproject(){
          return MemberAxios.get('/allonproject').then(response=>{
               return response;
          })
     }

}


export default new MemberService();


/*
vitamine c
c1c1000
aspirine

*/