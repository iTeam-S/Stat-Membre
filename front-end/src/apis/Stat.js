import Axios from "axios"
import React from "react"

const ProjectAxios=Axios.create({
    baseURL:"http://localhost:8000/api/v1/project"
})
const MemberAxios=Axios.create({
    baseURL:"http://localhost:8000/api/v1/member"
})

const CritereAxios=Axios.create({
    baseURL:"http://localhost:8000/api/v1/critere"
}) 
const AuthAxios=Axios.create({
    baseURL:"http://localhost:8000/api/v1/auth"
})
export{
    ProjectAxios,
    MemberAxios,
    CritereAxios 
}
