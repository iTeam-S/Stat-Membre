import {useState, createContext} from "react"

export const ProjectContext=createContext()

export const ProjectContextProvider=(props)=>{
    const [projects,setProjects]=useState([])
    const addProject = (project)=> {
        setProjects([...projects,project]);}
    
    return(
        <ProjectContext.Provider value={{projects, setProjects,addProject}}>
            {props.children}
        </ProjectContext.Provider>
    )
}

