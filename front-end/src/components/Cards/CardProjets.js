<<<<<<< HEAD




import React,{useState,useRef,useEffect, useContext} from "react";
import axios from "axios"
import {ProjectAxios} from "../../apis/Stat"
import { ProjectContext } from "context/ProjectContext";
=======
import React,{useEffect, useContext} from "react";
>>>>>>> 5fce297864ba7685741f95d1cada067052e2483e
import { useHistory } from "react-router";



import {ProjectAxios} from "../../utils/apis/Stat"
import { ProjectContext } from "../../utils/context/ProjectContext";




export default function CardProjets(props) {
  let history=useHistory()

  const {projects,setProjects}=useContext(ProjectContext)
   useEffect( ()=>{
     const fetchData=async()=>{
      try {
        const response=await ProjectAxios.get("/getAll");
        setProjects(response.data); 
       } catch (error) {
         console.log(error);  
       }
     } 
     fetchData();
   },[])
<<<<<<< HEAD
=======
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
>>>>>>> 5fce297864ba7685741f95d1cada067052e2483e
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-center text-blueGray-700">
                Nos projets
              </h3>
            </div>
          </div>
          <div className=".border-current">
            <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
              <div className="relative flex w-full flex-wrap items-stretch">
                <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  placeholder="Search here..."
                  className="border-current border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                />
              </div>
            </form>
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
                  Total Points
                </th>
                <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Avancement
                </th>
              </tr>
            </thead>
            <tbody>
            {projects.map((project)=>( 
              <tr  key={project.id} >
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                {project.nom}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {project.total_participant}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {project.total_point}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  {project.valide ? "100%":"En cours"}
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
