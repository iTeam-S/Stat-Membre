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
     listmemberonproject(){
          return MemberAxios.get('/allonproject').then(response=>{
               return response;
          })
     }
     getOneMemberProject(id){
          return MemberAxios.get(`/${id}/allproject`).then(response=>{
               return response
          })
     }
     NoterUnMembre(difficulte, deadline, impact, implication,id_membre,id_projet){
          return MemberAxios.put('/notermembre',{
               difficulte,
               deadline,
               impact,
               implication,
               id_membre,
               id_projet
          })

     }
     

}


export default new MemberService();


