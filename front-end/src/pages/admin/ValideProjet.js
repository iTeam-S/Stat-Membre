import React,{useEffect,useState,useContext} from "react"
import Navbar from "../../components/Navbars/AuthNavbar.js";
import FooterSmall from "../../components/Footers/FooterSmall.js";
import { useParams,useHistory } from "react-router";
import ProjectService from "../../utils/service/projectservice"
import { ProjectContext } from "../../utils/context/ProjectContext.js";
import { Link } from "react-router-dom";




export default function ValideProjet(){

  const [difficulte,setDifficulte]=useState(1);
  const [deadline,setDeadine]=useState(1);
  const [implication,setImplication]=useState(1);
  const [impact,setImpact]=useState(1);
  /*    */

    let history=useHistory();
    const {id}=useParams();
    const [part,setPart]=useState([])
    const {projects}=useContext(ProjectContext)
 


    useEffect(()=>{
      const fetchdata=async()=>{
      try{
        await ProjectService.GetProjectMember(id).then((response)=>{
          setPart(response.data)
        })
        
      }catch(error){
       console.log(error);
      }   
      }
      fetchdata();

  },[])
  const handleValideMember=(e)=>{
      console.log(difficulte,deadline,impact,implication);
    }
     return(
          <>
           <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
      <div className="mx-1/3 relative  container flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-4">
      <section className="bg-white h-12">
      {
        projects
          .filter((project) => project.id==id)
          .map((project) => (
        <h1 className="text-center font-semibold text-2xl italic">Valider tous les participants du projet <span className="text-teal-500 ">{project.nom_projet}</span></h1>
        ))}
      </section>
      <div className=" py-4 rounded-lg ml-5 flex flex-wrap  container mx-auto px-1/100 h-full border-blueGray-50">
        {part.map((participant)=>(
        <div className="w-1/3 mx-4 mt-1/2 rounded-lg bg-white px-6">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={participant.pdc_participant ? participant.pdc_participant:require("assets/img/team-1-800x800.jpg").default}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {participant.point_experience}
                  </span>
                  <span className="text-sm text-blueGray-400">Point Actuel</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {participant.nombre_projet}
                  </span>
                  <span className="text-sm text-blueGray-400">Nombre_projet</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
             {participant.nom_participant + " " +participant.prenom_participant}
            </h3>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              {participant.fonction}
            </div>
            <div className="mb-2 text-blueGray-600">
              <Link to={`/admin/project/noterone/${participant.id}/${id}`}>
              <input   type="submit" className = "bg-teal-700 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" value="Noter"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
               
      ))}
      </div>
      
    </div>
          <FooterSmall absolute />
        </section>
      </main>
          </>
     )
}