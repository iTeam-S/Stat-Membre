import Axios from "axios"


const ProjectAxios=Axios.create({
    baseURL:"https://stat-back.iteam-s.mg/api/v1/project"
})
const MemberAxios=Axios.create({
    baseURL:"https://stat-back.iteam-s.mg/api/v1/member"
})

const CritereAxios=Axios.create({
    baseURL:"https://stat-back.iteam-s.mg/api/v1/critere"
}) 
const AuthAxios=Axios.create({
    baseURL:"https://stat-back.iteam-s.mg/api/v1/auth"
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
