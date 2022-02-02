import React,{useState, createContext,useEffect} from "react"
import MemberService from "../../utils/service/memberservice"

export const MemberContext=createContext()



export const MemberContextProvider=props=>{
    const [members,setMembers]=useState([]);
    useEffect(()=>{
        async function fetchMember(){
            await MemberService.getListMember().then((response)=>{
                setMembers(response.data)
            })
        }

        fetchMember()
    },[])
    const addMember = (member)=> {
        setMembers([...members,member]);}
    return(
        <MemberContext.Provider value={{members,setMembers,addMember}}>
            {props.children}
        </MemberContext.Provider>
    )
}