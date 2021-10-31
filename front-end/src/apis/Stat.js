import Axios from "axios"
import React from "react"

const ProjectAxios=Axios.create({
    baseURL:"http://localhost:8000/api/v1/project"
})
const MemberAxios=Axios.create({
    baseURL:"http://localhost:8000/api/v1/member"
})


export{
    ProjectAxios,
    MemberAxios
}
