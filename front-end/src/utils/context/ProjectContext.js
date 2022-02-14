import {useState, createContext,useEffect} from "react"
import ProjectService from "../../utils/service/projectservice"

export const ProjectContext=createContext()

export const ProjectContextProvider=(props)=>{
    const [projects,setProjects]=useState([])
    const addProject = (project)=> {
        setProjects([...projects,project]);}


    useEffect(()=>{
        async function fetchProject(){
            const response=await ProjectService.GetAll();
            setProjects(response.data)
        }
        fetchProject()
        

    },[])
   
    return(
        <ProjectContext.Provider value={{projects, setProjects,addProject}}>
            {props.children}
        </ProjectContext.Provider>
    )
}

