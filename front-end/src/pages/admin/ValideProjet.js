import React,{useEffect,useState} from "react"
import Navbar from "../../components/Navbars/AuthNavbar.js";
import FooterSmall from "../../components/Footers/FooterSmall.js";
import { useParams,useHistory } from "react-router";
import ProjectService from "../../utils/service/projectservice"



export default function ValideProjet(){
    let history=useHistory();
    const nom=useParams();
    const [part,setPart]=useState([])
    const [commit,setCommit]=useState([])
    useEffect(()=>{
      const fetchdata=async()=>{
      try{
        await ProjectService.GetProjectMember(nom.nom).then((response)=>{
          setPart(response.data)
        })
        await ProjectService.GetCommit(nom.nom).then((response)=>{
          setCommit(response)
        })
      }catch(error){
        console.log(error);
      }   
      }
      fetchdata();

  },[nom])
  console.log(nom.nom);
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
      <div className="mx-1/3 relative  container flex flex-col min-w-0 break-words bg-gray-400 w-full mb-6 shadow-xl rounded-lg mt-4">
      <section className="bg-white h-12">
        <h1 className="text-center font-semibold text-2xl italic">Valider tous les partcipants du projet <span className="text-teal-500 ">Nom du projet</span></h1>
      </section>
      <div className="bg-gray-400  py-4 rounded-lg ml-5 flex flex-wrap  container mx-auto px-1/100 h-full border-blueGray-50">
        {part.map((participant)=>(
        <div className="w-1/3 mx-4 rounded-lg bg-white px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  src={participant.pdc_participant ? participant.pdc_participant:require("assets/img/team-1-800x800.jpg").default} alt="..."
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute m-2 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <h3 className="text-xl font-semibold leading-normal mt-1/10 mb-2 text-blueGray-700 mb-2">
                {participant.nom_participant +" "+ participant.prenom_participant}
              </h3>
            </div>
          </div>
        <div className = "bg-gray-400 flex-auto mb-5 px-4 lg:px-10 py-10 pt-0" >
          <form action="">
            <div className = "relative w-full mb-3" >
              <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2"  htmlFor = "deadline" >Impact Projet </label> 
                <select id="deadline"   className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                  <option value="1">Debutant</option>
                  <option value="2">Amateur</option>
                  <option value="3">Normal</option>
                  <option value="4">Haut Niveau</option>
                  <option value="5">Legende</option>
                </select>
            </div>
            <div className = "relative w-full mb-3" >
              <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2"  htmlFor = "deadline" >Difficulté </label> 
                <select id="deadline"   className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                  <option value="1">Debutant</option>
                  <option value="2">Amateur</option>
                  <option value="3">Normal</option>
                  <option value="4">Haut Niveau</option>
                  <option value="5">Legende</option>
                </select>
            </div>
            <div className = "relative w-full mb-3" >
              <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2"  htmlFor = "deadline" >Implication  </label> 
                <select id="deadline"   className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                  <option value="1">Debutant</option>
                  <option value="2">Amateur</option>
                  <option value="3">Normal</option>
                  <option value="4">Haut Niveau</option>
                  <option value="5">Legende</option>
                </select>
            </div>
            <div className = "relative w-full mb-3" >
              <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2"  htmlFor = "deadline" >DeadLine </label> 
                <select id="deadline"   className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                  <option value="1">Debutant</option>
                  <option value="2">Amateur</option>
                  <option value="3">Normal</option>
                  <option value="4">Haut Niveau</option>
                  <option value="5">Legende</option>
                </select>
            </div>
            <div className = "relative w-full mb-3" >
              <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2"  htmlFor = "deadline" >Point_git </label> 
                <select id="point_git"   className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                  <option value="1">Debutant</option>
                  <option value="2">Amateur</option>
                  <option value="3">Normal</option>
                  <option value="4">Haut Niveau</option>
                  <option value="5">Legende</option>
                </select>
            </div>
            <div className = "text-center mt-6" >
              <button  type="submit" className = "bg-teal-700 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" >Valider</button> 
            </div>
          </form> 
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