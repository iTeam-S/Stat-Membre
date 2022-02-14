import {ProjectAxios} from "../apis/Stat"
import {CritereAxios} from "../apis/Stat"
import {GithubAxios} from "../apis/Stat"


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
     getNombreDuprojetDmembre(id){
          return ProjectAxios.get(`/getnbprojetdmembre/${id}`).then(response=>{
               return response;
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
     getnombrecourspm(){
          return ProjectAxios.get('/getnbencourspm').then(response=>{
               return response
          })
     }
     getnombrevalidepm(){
          return ProjectAxios.get('/getnbvalidepm').then(response=>{
               return response
          })
     }
     GetProjectMember(id){
          return ProjectAxios.get(`/${id}/part`).then(response=>{
               return response
          })
     }
     GetProjectMemberv(id){
          return ProjectAxios.get(`/${id}/partv`).then(response=>{
               return response
          })
     }
     GetCommit(nom){
          return GithubAxios.get(`/${nom}?commit_only=true`).then(response=>{
               return response
          })
          

     }
     AddProject(nom,repos,delai,pdc){
               return ProjectAxios.post("/create",{
                    nom,
                    repos,
                    delai,
                    pdc,
               }) 
     }
     addMember(id_membre,id_projet){
               return ProjectAxios.post("/addMember",{
                    id_membre,
                    id_projet,
               })
          
     }

     DeleteMember(id_membre,id_projet){
               return ProjectAxios.post('/remove',{
                    id_membre,
                    id_projet,
               })


     }
     GetAll(){
          return ProjectAxios.get("/getAll").then(response=>{
               return response
          })
     }
     getnbactif(){
          return ProjectAxios.get('/nbactif').then(response=>{
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
     getPourcentage(){
          return ProjectAxios.get("/pourcentagev").then(response=>{
               return response
          })
     }

     getAllvalide(){
          return ProjectAxios.get("/nbvalide").then(response=>{
               return response
          })
     }

     
}

export default new ProjectService()