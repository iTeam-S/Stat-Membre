import {useState,useContext, createContext} from "react"

export const CritereContext=createContext()

export const CritereContextProvider=props=>{
    const [criteres,setCriteres]=useState([])
    const addCritere=(critere)=>{
        setCriteres([...criteres,critere]);   }
    
    return(
        <CritereContext.Provider value={{criteres, setCriteres,addCritere}}>
            {props.children}
        </CritereContext.Provider>
    )
}