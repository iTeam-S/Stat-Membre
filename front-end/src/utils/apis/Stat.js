import Axios from "axios"


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
const GithubAxios=Axios.create({
    baseURL:"https://github.iteam-s.mg"
})
export{
    ProjectAxios,
    MemberAxios,
    CritereAxios,
    AuthAxios,
    GithubAxios

}
