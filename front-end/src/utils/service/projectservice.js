import {ProjectAxios} from "../apis/Stat"
import {CritereAxios} from "../apis/Stat"


class ProjectService {
     AddCritere(difficulte,deadline,impact,implication,point_git){
               return CritereAxios.post("/create",{
                    difficulte,
                    deadline,
                    impact,
                    implication,
                    point_git
               }) 

     }
     UpdateCritere(difficulte,deadline,impact,implication,point_git,id){
          return CritereAxios.put(`/update/${id}`,{
               difficulte,
               deadline,
               impact,
               implication,
               point_git 

               })
          
     }
     UpdateProject(nom,repos,delai,id){
               return ProjectAxios.put(`/update/${id}`,{
                    nom,
                    repos,
                    delai,
               }) 

     }
     GetProjectMember(nom){
          return ProjectAxios.get(`/${nom}/part`).then(response=>{
               return response
          })
     }
     AddProject(nom,repos,delai){
               return ProjectAxios.post("/create",{
                    nom,
                    repos,
                    delai,
               }) 
     }

     DeleteMember(membername,projectname){
               return ProjectAxios.post('/remove',{
                    membername,
                    projectname
               })

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
          
          return ProjectAxios.post("/addMember",{
               membername,
               projectname
          }) 
     }
}

export default new ProjectService()