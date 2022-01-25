import React,{useEffect, useContext} from "react";
import {ProjectAxios} from "../../utils/apis/Stat"
import { ProjectContext } from "../../utils/context/ProjectContext";
import ProjectService from "../../utils/service/projectservice"
import { useHistory } from "react-router";




export default function CardProjetsAdmin(props) {
  let history=useHistory()

  const {projects,setProjects}=useContext(ProjectContext)
  useEffect(()=>{
    const fetchData=async()=>{
     try {
       const bla=[]
       const response=await ProjectService.GetAll();
       for (let index = 0; index < response.data.length; index++) {
         let proj={}
         let part=[]
         await ProjectService.GetProjectMember(response.data[index].nom).then(res=>{
           for (let i = 0; i < res.data.length; i++) {
             part.push(res.data[i]);
             
           }
         })
         proj['id']=response.data[index].id
         proj['nom_projet']=response.data[index].nom
         proj['total_participant']=response.data[index].total_participant
         proj['total_point']=response.data[index].total_point
         proj['participant']=part
         proj['valide']=response.data[index].valide
         bla.push(proj)
       }
       setProjects(bla);
      } catch (error) {
        console.log(error);
      }
    } 
    fetchData();

  },[setProjects])

   const deleteHandle=async (id)=>{
     try {
       await ProjectAxios.delete(`/delete/${id}`);
       setProjects(projects.filter(project=>{
         return project.id !==id
       })) 
     } catch (error) {
      console.log(error) 
     }
     
   };
   const handleUpdate = (id)=>{
    history.push(`/admin/project/${id}/update`)
    
  };
  const handleValide =async (id)=>{
    let current=new Date()
    let datvalid=`${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}}`;
    try {
      const validateProject=await ProjectAxios.put(`/valide/${id}`,{
        valide:"true"
      });
      window.location.reload();
      
    } catch (error) {
      console.log(error);
      
    }
    
  }
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-center text-blueGray-700">
                NOS PROJETS
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Nom du projet
                </th>
                <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Participants
                </th>
                <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Avancement
                </th>
                <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
            {projects.map((project)=>( 
              <tr  key={project.id} >
                <th className="font-semibold text-2xl italic border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                {project.nom_projet}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {project.total_participant}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  {project.valide ? "100%":"En cours"}
                </td>
                <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                <span className="flex items-stretch">
                  <button onClick={()=>handleUpdate(project.id)} className="bg-teal-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 " 
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8 bg-teal-500" fill="none" viewBox="0 0 24 24" stroke="white"><title>MODIFIER</title>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button onClick={()=>handleValide(project.id)} className="bg-emerald-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 "
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title>VALIDER</title>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </button>
                  <button onClick={()=> deleteHandle(project.id)} className="bg-red-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 " 
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                  </button>
                </span>
                </td>
              </tr>
               ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
