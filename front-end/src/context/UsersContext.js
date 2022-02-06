import {useState,useContext, createContext} from "react"

export const UserContext=createContext()

export const UserContextProvider=props=>{
    const [users,setUsers]=useState([])
    const addUser = (user)=> {
        setUsers([...users,user]);}
    
    return(
        <UserContext.Provider value={{users, setUsers,addUser}}>
            {props.children}
        </UserContext.Provider>
    )
}