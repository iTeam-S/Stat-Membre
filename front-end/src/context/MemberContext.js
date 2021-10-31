import React,{useState,useContext, createContext} from "react"

export const MemberContext=createContext()



export const MemberContextProvider=props=>{
    const [members,setMembers]=useState([])
    return(
        <MemberContext.Provider value={{members,setMembers}}>
            {props.children}
        </MemberContext.Provider>
    )
}