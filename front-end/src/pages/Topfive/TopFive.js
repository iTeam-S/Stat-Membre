import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/streak"



import MemberService from "../../utils/service/memberservice";



export default function Topfive({topfive}){
         
     const [first,second,third,forth,fifth]=topfive;
     const streak_url = "https://github-readme-streak-stats.herokuapp.com/?theme=vue&ring=D96098&fire=D96098&user= ";
    console.log(topfive);
     return(
          <div>
            <section className="mt-12" >
                    <h3 className="text-3xl font-semibold text-center text-blueGray-600">
                        Top 5 de la communauté
                    </h3>
                    <div className="text-center mt-5 text-pulse-500 font-semibold">
                        <Link to="/views/public/memberlist">Tout voir</Link><span><a href="view/projet.html">
                        <i className="fa fa-chevron-right"></i></a></span>
                    </div>
                    <div className="mx-auto w-8/12 rounded-lg mt-5 flex flex-no-wrap bg-white container h-full border-blueGray-50">
                        {first &&(
                        <div className="hover:-mt-4 duration-500 relative flex flex-col w-1/5 break-words bg-teal-700 rounded mt-1/2 h-1/4  shadow-lg">
                            <div className=" w-full">
                                            <div className="relative w-10/12 pr-4 max-w-full flex-grow flex-1">
                                                <span className = "h-12 w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                                                    <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = {first.pdc?first.pdc: require("../../assets/img/team-1-800x800.jpg").default }/>
                                                </span>
                                                <span className="font-semibold text-xl text-black">
                                                {first.prenom + " "+first.nom}
                                                </span>
                                            </div>   
                                            <div className=" mx-auto w-full px-2 text-center mt-1/2">
                                            <div className="bg-white flex flex-wrap px-1 py-4 lg:pt-4 pt-8">
                                            <div className="lg:mr-2 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-black">
                                                   1
                                                </span>
                                                <span className="text-sm font-semibold  uppercase text-teal-500">Rang</span>
                                                </div>
                                            <div className="lg:mr-2 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-black">
                                                    {first.nombre_projet?first.nombre_projet:0}
                                                </span>
                                                <span className="text-sm font-semibold  uppercase text-teal-500">Projet</span>
                                                </div>
                                                <div className="lg:mr-2 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-black">
                                                    {first.point_experience}
                                                </span>
                                                <span className="text-sm font-semibold  uppercase text-teal-500">Point</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={styles.content_streak}>
                                                <p style={styles.nom_user}>Streak</p>
                                                <img
                                                    src= { streak_url.trim()+first.user_github}
                                                    className="rounded-t-lg"
                                                    />
                                        </div>
                                    </div>
                            </div>
                        )}   
                        {second &&(
                        <div className="hover:-mt-4 duration-500 relative flex flex-col w-1/5 break-words bg-teal-500  h-1/4 rounded mt-1/4 xl:mb-0 shadow-lg">
                                <div className=" w-full">
                                        <div className="relative w-10/12 pr-4 max-w-full flex-grow flex-1">
                                            <span className = "h-12 w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                                                <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = {second.pdc?second.pdc: require("../../assets/img/team-1-800x800.jpg").default }/>
                                            </span>
                                            <span className="font-semibold text-xl text-black">
                                               {second.prenom+ " " +second.nom}
                                            </span>
                                        </div>   
                                        <div className="mx-auto w-full px-2 text-center mt-1/2">
                                        <div className="bg-white flex flex-wrap px-1 py-4 lg:pt-4 pt-8">
                                          <div className="lg:mr-2 p-3 text-center">
                                              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                2
                                              </span>
                                              <span className="text-sm font-semibold  uppercase text-teal-500">Rang</span>
                                            </div>
                                          <div className="lg:mr-2 p-3 text-center">
                                              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                {second.nombre_projet?second.nombre_projet:0}
                                              </span>
                                              <span className="text-sm font-semibold  uppercase text-teal-500">Projet</span>
                                            </div>
                                            <div className="lg:mr-2 p-3 text-center">
                                              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                {second.point_experience}
                                              </span>
                                              <span className="text-sm font-semibold  uppercase text-teal-500">Point</span>
                                            </div>
                                          </div>
                                      </div>
                                      <div style={styles.content_streak}>
                                            <p style={styles.nom_user}>Streak</p>
                                              <img
                                                src= { streak_url.trim()+second.user_github}
                                                className="rounded-t-lg"
                                                />
                                      </div>
                                </div>
                        </div>
                        )}
                        {third &&(
                        <div className="hover:-mt-4 duration-500 relative flex flex-col w-1/5 break-words bg-teal-300 h-1/4 rounded mt-1/6 xl:mb-0 shadow-lg">
                            <div className=" w-full">
                                        <div className="relative w-10/12 pr-4 max-w-full flex-grow flex-1">
                                            <span className = "h-12 w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                                                <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = {third.pdc?third.pdc: require("../../assets/img/team-1-800x800.jpg").default }/>
                                            </span>
                                            <span className="font-semibold text-xl text-black">
                                               {third.prenom + " " +third.nom}
                                            </span>
                                        </div>   
                                        <div className="mx-auto w-full px-2 text-center mt-1/2">
                                        <div className="bg-white flex flex-wrap px-1 py-4 lg:pt-4 pt-8">
                                          <div className="lg:mr-2 p-3 text-center">
                                              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                3
                                              </span>
                                              <span className="text-sm font-semibold  uppercase text-teal-500">Rang</span>
                                            </div>
                                          <div className="lg:mr-2 p-3 text-center">
                                              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                {third.nombre_projet?third.nombre_projet:0}
                                              </span>
                                              <span className="text-sm font-semibold  uppercase text-teal-500">Projet</span>
                                            </div>
                                            <div className="lg:mr-2 p-3 text-center">
                                              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                {third.point_experience}
                                              </span>
                                              <span className="text-sm font-semibold  uppercase text-teal-500">Point</span>
                                            </div>
                                          </div>
                                      </div>
                                      <div style={styles.content_streak}>
                                            <p style={styles.nom_user}>Streak</p>
                                              <img
                                                src= { streak_url.trim()+third.user_github}
                                                className="rounded-t-lg"
                                                />
                                      </div>
                            </div>
                        </div>
                        )}
                        {forth&&(
                        <div className="hover:-mt-4 duration-500 relative flex flex-col w-1/5 break-words bg-teal-200 h-1/4 rounded mt-1/8 xl:mb-0 shadow-lg">
                            <div className=" w-full">
                                        <div className="relative w-10/12 pr-4 max-w-full flex-grow flex-1">
                                            <span className = "h-12 w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                                                <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = { forth.pdc?forth.pdc:require("../../assets/img/team-1-800x800.jpg").default }/>
                                            </span>
                                            <span className="font-semibold text-xl text-black">
                                                {forth.prenom+" "+forth.nom}
                                            </span>
                                        </div>   
                                        <div className=" mx-auto w-full px-2 text-center mt-1/2">
                                        <div className="bg-white flex flex-wrap px-1 py-4 lg:pt-4 pt-8">
                                          <div className="lg:mr-2 p-3 text-center">
                                              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                4
                                              </span>
                                              <span className="text-sm font-semibold  uppercase text-teal-500">Rang</span>
                                            </div>
                                          <div className="lg:mr-2 p-3 text-center">
                                              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                {forth.nombre_projet?forth.nombre_projet:0}
                                              </span>
                                              <span className="text-sm font-semibold  uppercase text-teal-500">Projet</span>
                                            </div>
                                            <div className="lg:mr-2 p-3 text-center">
                                              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                {forth.point_experience}
                                              </span>
                                              <span className="text-sm font-semibold  uppercase text-teal-500">Point</span>
                                            </div>
                                          </div>
                                      </div>
                                      <div style={styles.content_streak}>
                                            <p style={styles.nom_user}>Streak</p>
                                              <img
                                                src= { streak_url.trim()+forth.user_github}
                                                className="rounded-t-lg"
                                                />
                                      </div>
                            </div>
                        </div>
                        )}
                        {fifth&&(
                        <div className="hover:-mt-4 duration-500 relative flex flex-col w-1/5 break-words bg-zinc-300 h-1/4 rounded mt-1/10 xl:mb-0 shadow-lg">
                            <div className=" w-full">
                                        <div className="relative w-10/12 pr-4 max-w-full flex-grow flex-1">
                                            <span className = "h-12 w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                                                <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = {fifth.pdc?fifth.pdc: require("../../assets/img/team-1-800x800.jpg").default }/>
                                            </span>
                                            <span className="font-semibold text-xl text-black">
                                                {fifth.prenom+" "+fifth.nom}
                                            </span>
                                        </div>   
                                        <div className=" mx-auto w-full px-2 text-center mt-1/2">
                                        <div className="bg-white flex flex-wrap px-1 py-4 lg:pt-4 pt-8">
                                          <div className="lg:mr-2 p-3 text-center">
                                              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                5
                                              </span>
                                              <span className="text-sm font-semibold  uppercase text-teal-500">Rang</span>
                                            </div>
                                          <div className="lg:mr-2 p-3 text-center">
                                              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                {fifth.nombre_projet?fifth.nombre_projet:0}
                                              </span>
                                              <span className="text-sm font-semibold  uppercase text-teal-500">Projet</span>
                                            </div>
                                            <div className="lg:mr-2 p-3 text-center">
                                              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                {fifth.point_experience}
                                              </span>
                                              <span className="text-sm font-semibold  uppercase text-teal-500">Point</span>
                                            </div>
                                          </div>
                                      </div>
                                      <div style={styles.content_streak}>
                                            <p style={styles.nom_user}>Streak</p>
                                              <img
                                                src= { streak_url.trim()+fifth.user_github}
                                                className="rounded-t-lg"
                                                />
                                      </div>
                            </div>
                        </div>
                        )}
                    </div>
            </section>
          </div>
     )
}