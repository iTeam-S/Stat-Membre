import React,{useState,useEffect,useRef} from "react";
import Navbar from "../components/Navbars/AuthNavbar";
import FooterSmall from "../components/Footers/FooterSmall.js";
import MemberService from "../service/memberservice"




export default function MemberList(){
    const [members,setMembers]=useState([]);
    const [memberzero,setMemberzero]=useState({});

    useEffect(()=>{
        MemberService.getListMember().then(response=>{
            setMembers(response.data)
            setMemberzero(response.data[0]);
        });
        
    },[])
    console.log((members.indexOf(memberzero))+1);
     return(
          <div>
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
                    <section>
                    <div className="block relative z-1  pb-48 mx-1/5 ">
                    <div className = "py-4 rounded-lg flex flex-wrap  container mx-auto px-48 h-full border-blueGray-50" >
                        <div className = "flex  flex-wrap " >
                            <div className = "w-full" >
                                <div className = "flex flex-wrap" >
                                {members.map((member=>(
                                    <div key={member.id} className = "w-3/5 ml-1/40 mt-1/2 h-1/2" >
                                        <div className="w-full max-w-sm rounded overflow-hidden shadow-lg">
                                        <img alt = "..." className = "w-full  align-middle border-none shadow-lg" src = {member.pdc?member.pdc:("https://h5ckfun.info/wp-content/uploads/2015/07/MyAvatar.png") }/>
                                            <div className="px-5 py-4">
                                                <p className="text-center font-bold text-xl mb-2 text-teal-500">{member.nom} {member.prenom}</p>
                                            </div>
                                            <div className="w-full">
                                            <table className="w-full bg-transparent border-collapse">
                                                <thead>
                                                    <tr>
                                                        <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Rang</th>
                                                        <th className="px-6 bg-orange-500  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{(members.indexOf(member))+1}</th>
                                                    </tr>
                                                    <tr>
                                                        <th className="px-6 bg-teal-500 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total_point</th>
                                                        <th className="px-6  bg-orange-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{member.point_experience}</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                            </div>
                                        </div>
                                    </div>
                                    )))}
                                </div> 
                            </div>
                        </div> 
                    </div>
                </div>
            </section>      
               <FooterSmall absolute />
          </section>
        </main>
     </div>
     )
}