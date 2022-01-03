import {ProjectAxios} from "../apis/Stat"


class ProjectService {
     GetAll(){
          return ProjectAxios.get("/getAll").then(response=>{
               return response
          })
     }
     getOneProject(id){
          return ProjectAxios.get(`/getone/${id}`).then(response=>{
               return response
          })

     }
     getAllencours(){
          return ProjectAxios.get("/getAllnodeployed").then(response=>{
               return response
          })
     }

     getAllvalide(){
          return ProjectAxios.get("/listAlldeployed").then(response=>{
               return response
          })
     }

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

export default new ProjectService()