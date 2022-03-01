import React,{useEffect,useState,useContext} from "react"
import Navbar from "../../components/Navbars/AuthNavbar.js";
import FooterSmall from "../../components/Footers/FooterSmall.js";
import { useParams} from "react-router";
import ProjectService from "../../utils/service/projectservice"
import { ProjectContext } from "../../utils/context/ProjectContext.js";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/streak"





export default function ValideProjet(){

  const streak_url = "https://github-readme-streak-stats.herokuapp.com/?theme=vue&ring=D96098&fire=D96098&user= ";

  /*    */

    const {id}=useParams();
    const [part,setPart]=useState([])
    const {projects}=useContext(ProjectContext)

    useEffect(()=>{
      const fetchdata=async()=>{
      try{
        await ProjectService.GetProjectMemberv(id).then((response)=>{
          setPart(response.data)
        })
        
      }catch(error){
       console.log(error);
      }   
      }
      fetchdata();

  },[id])

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
      <div className="mx-1/3 relative  container flex flex-col min-w-0 break-words w-full mb-6 rounded-lg mt-4">
      <section className=" h-12">
      {
        projects
          .filter((project) => project.id==id)
          .map((project) => (
            <h1 key={project.nom} className="animate-bounce cursor-pointer rounded-full mx-2/5 text-xl mb-8 italic font-semibold bg-teal-700 text-white fas fa-angle-double-down text-center"> Les participants du projet <span className="text-orange-500 font-semibold"> {project.nom}</span></h1>
        ))}
      </section>
      {part.length===0 &&(
        <div className = "container mx-auto px-4 h-full" >
        <div className = "flex content-center items-center justify-center h-full" >
            <div className = "w-full lg:w-6/12 px-4" >
                <div className = "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0" >
                    <div className = "rounded-t mb-0 px-6 py-6" >
                        <div className = "text-center mb-3" >
                            <h6 className = "text-blueGray-500 text-sm font-bold italic semibold" >Ce projet n'a pas encore des participants à Noter</h6> 
                        </div> 
                    </div>  
                </div> 
            </div> 
        </div> 
      </div> 
      )}
      <div className=" py-4 rounded-lg ml-5 flex flex-wrap  container mx-auto px-1/100 h-full border-blueGray-50">
        {part.map((participant)=>(
        <div key={participant.id} className="hover:mt-4 duration-300 w-1/3 mx-4 mt-1/2 rounded-lg bg-white px-6">
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
                  <span className="text-xl font-bold block uppercase tracking-wide text-orange-500 ">
                    {participant.nombre_projet}
                  </span>
                  <span className="text-xl text-black font-semibold">Projet</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-orange-500 ">
                    {participant.point_experience}
                  </span>
                  <span className="text-xl text-black font-semibold">Point</span>
                </div>
              </div>
            </div>
          </div>
          <div style={styles.content_streak}>
                <p style={styles.nom_user}>Streak</p>
                  <img
                    alt={participant.prenom}
                    src= { streak_url.trim() + participant.user_github }
                    className="rounded-t-lg"
                    />
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