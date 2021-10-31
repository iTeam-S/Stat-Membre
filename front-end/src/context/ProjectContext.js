import {useState,useContext, createContext} from "react"

export const ProjectContext=createContext()

export const ProjectContextProvider=props=>{
    const [projects,setProjects]=useState([])


    return(
        <ProjectContext.Provider value={{projects, setProjects}}>
            {props.children}
        </ProjectContext.Provider>
    )
}

