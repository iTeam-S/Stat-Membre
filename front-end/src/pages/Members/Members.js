import React,{useContext} from "react";


import Navbar from "../../components/Navbars/AuthNavbar";
import FooterSmall from "../../components/Footers/FooterSmall.js";
import { MemberContext } from "utils/context/MemberContext";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/streak"
import '../../assets/styles/style.css'



export default function MemberList(){
    const {members}=useContext(MemberContext);
    const streak_url = "https://github-readme-streak-stats.herokuapp.com/?theme=vue&ring=D96098&fire=D96098&user= ";
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
      <div className="relative  container flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-4 mx-auto" style={styles.conteneur}>
      <section className=" h-12">
      
            <h1 className="animate-bounce cursor-pointer rounded-full mx-2/5 text-base mb-8 italic font-semibold bg-teal-700 text-white fas fa-angle-double-down text-center">Tous les membres iTeams-$</h1>
      </section>
      <div className=" py-4 rounded-lg ml-5 flex flex-wrap px-1/100 h-full border-blueGray-50 mx-auto">
      {members.map((membre)=>(
        <div key={membre.id} className="hover:mt-4 duration-300 w-1/3 mx-4 mt-1/2 mb-4 card-member rounded-lg bg-white px-6">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src={membre.user_github_pic ? membre.user_github_pic:require("assets/img/team-1-800x800.jpg").default}
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
                <div className="w-full px-4 text-center mt-20">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
                        {members.indexOf(membre)+1}
                      </span>
                      <span className="text-sm text-black font-semibold">Rang</span>
                    </div>
                  <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
                        {membre.nombre_projet}
                      </span>
                      <span className="text-sm text-black font-semibold">Projet</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
                        {membre.point_experience}
                      </span>
                      <span className="text-sm text-black font-semibold">Point</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={styles.content_streak}>
                    <p style={styles.nom_user}>Streak</p>
                      <img
                        alt={membre.prenom}
                        src= { streak_url.trim() + membre.user_github }
                        className="rounded-t-lg"
                        />
              </div>
              <div className="text-center mt-12">
                <h3 className="text-xl font-semibold leading-normal mb-2 hover:text-white mb-2 nom-card-profil">
                {membre.nom + " " +membre.prenom}
                </h3>
                <div className="mb-2 mt-10 fonction-card-profil">
                  <i className="fas fa-briefcase mr-2 text-lg hover:text-white"></i>
                  {membre.fonction}
                </div>
                <div className="mb-2 text-blueGray-600">
                  <Link to={`/views/public/projetdmembre/${membre.id}`}>
                  <input   type="submit" className = "bg-teal-700 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" value="Tous ses projets"/>
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
);
}
