import React,{ useContext} from "react";
import {ProjectAxios} from "../../utils/apis/Stat"
import { ProjectContext } from "../../utils/context/ProjectContext";
import { useHistory } from "react-router";




export default function CardProjetsAdmin(props) {
  let history=useHistory()
  const {projects,setProjects}=useContext(ProjectContext)
  
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
  const handleValideMember =(id)=>{
    history.push(`/admin/valide/projet/${id}`)
    
  }
  const handleValideProject=(id)=>{
    console.log('le projet est validé maintenant');
  }
  const CheckProjectMember=(id)=>{
    history.push(`/public/project/${id}/mproject`)
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
            {projects
            .filter((projet)=>projet.valide==0)
            .map((project)=>( 
              <tr  key={project.id} >
                <th className="font-semibold text-2xl italic border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                {project.nom_projet}
                </th>
                <td className="font-semibold border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <button onClick={()=>CheckProjectMember(project.id)}  className="w-1/2 h-5 font-semibold bg-teal-700 text-white">{project.total_part ? project.total_part:"0"}</button>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  {project.valide ? "100%":"En cours"}
                </td>
                <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                <span className="flex items-stretch">
                <button onClick={()=>handleValideMember(project.id)} className="bg-teal-700 text-white active:bg-pink-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 "
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title>VALIDER_MEMBRE</title>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                  </button>
                  <button onClick={()=>handleValideProject(project.id)} className="bg-emerald-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 "
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title>VALIDER_PROJET</title>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </button>
                  <button onClick={()=>handleUpdate(project.id)} className="bg-teal-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 " 
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8 bg-teal-500" fill="none" viewBox="0 0 24 24" stroke="white"><title>MODIFIER_PROJET</title>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>          
                  <button onClick={()=> deleteHandle(project.id)} className="bg-red-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 " 
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title>SUPRIMER_PROJET</title>
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
