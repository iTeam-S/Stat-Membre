import {ProjectAxios} from "../apis/Stat"
import {CritereAxios} from "../apis/Stat"


class ProjectService {
     AddCritere(difficulte,deadline,impact,implication,point_git){
          try {
               return CritereAxios.post("/create",{
                    difficulte,
                    deadline,
                    impact,
                    implication,
                    point_git
               }) 

                } catch (error) {
                    console.log(error);
                    
                };

     }
     UpdateCritere(difficulte,deadline,impact,implication,point_git,id){
          try {
               return CritereAxios.put(`/update/${id}`,{
               difficulte,
               deadline,
               impact,
               implication,
               point_git   
               })
          } catch (error) {
             console.log(error);  
          }
     }
     UpdateProject(nom,repos,delai,id){
          try {
               return ProjectAxios.put(`/update/${id}`,{
                    nom,
                    repos,
                    delai,
               }) 

                } catch (error) {
                    console.log(error);
                    
                };

     }
     GetProjectMember(nom){
          return ProjectAxios.get(`/${nom}/part`).then(response=>{
               return response
          })
     }
     AddProject(nom,repos,delai){
          try {
               return ProjectAxios.post("/create",{
                    nom,
                    repos,
                    delai,
               }) 

                } catch (error) {
                    console.log(error);
                    
                };
     }
     DeleteMember(membername,projectname){
          try {
               return ProjectAxios.post('/remove',{
                    membername,
                    projectname
               })

          } catch (error) {
               console.log(error);
               
          }
     }
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