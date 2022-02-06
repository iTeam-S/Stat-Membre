import React,{useState, createContext} from "react"

export const MemberContext=createContext()



export const MemberContextProvider=props=>{
    const [members,setMembers]=useState([]);
    const addMember = (member)=> {
        setMembers([...members,member]);   }
    return(
        <MemberContext.Provider value={{members,setMembers,addMember}}>
            {props.children}
        </MemberContext.Provider>
    )
}