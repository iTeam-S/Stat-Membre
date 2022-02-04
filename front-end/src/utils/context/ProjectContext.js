import {useState, createContext,useEffect} from "react"
import ProjectService from "../../utils/service/projectservice"

export const ProjectContext=createContext()

export const ProjectContextProvider=(props)=>{
    const [projects,setProjects]=useState([])
    const addProject = (project)=> {
        setProjects([...projects,project]);}


    useEffect(()=>{
        
        
        async function fetchProject(){
            let pwithpart=[]
            
                const response=await ProjectService.GetAll();
                for (let i = 0; i < response.data.length; i++) {
                    let apart={}
                    let part=[]
                    ProjectService.GetProjectMember(response.data[i].id).then((res)=>{
                        
                        for (let j = 0; j < res.data.length; j++) {
                            
                            part.push(res.data[j])
                        }
                    })
                    apart['id']=response.data[i].id
                    apart['nom_projet']=response.data[i].nom
                    apart['participant']=part
                    apart['total_part']=response.data[i].total_participant
                    apart['valide']=response.data[i].valide
                    

                    pwithpart.push(apart)
                }
            setProjects(pwithpart)
        }
        fetchProject()
        

    },[])
   
    return(
        <ProjectContext.Provider value={{projects, setProjects,addProject}}>
            {props.children}
        </ProjectContext.Provider>
    )
}

