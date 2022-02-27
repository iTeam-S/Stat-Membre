import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/streak"

export default function Topfive({topfive}){
         
     const [first,second,third,forth,fifth]=topfive;
     const streak_url = "https://github-readme-streak-stats.herokuapp.com/?theme=dark&ring=7c8a16&fire=7c8a16&date_format=j%20M%5B%20Y%5D&dates=06ACBD&background=ffffff00&hide_border=true&user=";
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
                        <div className="hover:-mt-4 duration-500 relative flex flex-col w-1/5 break-words bg-lightBlue-600 rounded mt-1/2 h-1/4  shadow-lg">
                            <div className=" w-full">
                                            <div className="relative w-10/12 pr-4 max-w-full flex flex-grow flex-1">
                                                <span className = "h-12 w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                                                    <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = {first.user_github_pic?first.user_github_pic: require("../../assets/img/team-1-800x800.jpg").default } />
                                                </span>
                                                <span className="font-semibold text-xl flex flex-col justify-center text-black">
                                                    {first.prenom}
                                                </span>
                                            </div>   
                                            <div className=" mx-auto w-full px-2 text-center mt-1/2">
                                              <div className="bg-white flex flex-col flex-wrap px-1 py-4 lg:pt-4 pt-8">
                                                <div className="lg:mr-2 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-lightBlue-600">
                                                      1
                                                    </span>
                                                    <span className="text-sm font-semibold  uppercase text-lightBlue-600">Rang</span>
                                                </div>
                                                <div className="flex flex-row flex-wrap justify-between">
                                                  <div className="lg:mr-2 p-3 text-center">
                                                      <span className="text-xl font-bold block uppercase tracking-wide text-black">
                                                          {first.nombre_projet?first.nombre_projet:0}
                                                      </span>
                                                      <span className="text-sm font-semibold  uppercase text-lightBlue-600">Projet</span>
                                                  </div>
                                                  <div className="lg:mr-2 p-3 text-center">
                                                      <span className="text-xl font-bold block uppercase tracking-wide text-black">
                                                          {first.point_experience}
                                                      </span>
                                                      <span className="text-sm font-semibold  uppercase text-lightBlue-600">Point</span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                        <div style={styles.content_streak}>
                                                <p style={styles.nom_user}>Streak</p>
                                                <img
                                                    src= { streak_url.trim()+first.user_github}
                                                    className="rounded-t-lg"
                                                    alt = "..."
                                                    />
                                        </div>
                                    </div>
                            </div>
                        )}   
                        {second &&(
                        <div className="hover:-mt-4 duration-500 relative flex flex-col w-1/5 break-words bg-blueGray-700 h-1/4 rounded mt-1/4 xl:mb-0 shadow-lg">
                                <div className=" w-full">
                                        <div className="relative w-10/12 pr-4 max-w-full flex-grow flex-1">
                                            <span className = "h-12 w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                                                <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = {second.user_github_pic?second.user_github_pic: require("../../assets/img/team-1-800x800.jpg").default }/>
                                            </span>
                                            <span className="font-semibold text-xl text-white">
                                               {second.prenom}
                                            </span>
                                        </div>   
                                        <div className=" mx-auto w-full px-2 text-center mt-1/2">
                                              <div className="bg-white flex flex-col flex-wrap px-1 py-4 lg:pt-4 pt-8">
                                                <div className="lg:mr-2 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-700">
                                                      2
                                                    </span>
                                                    <span className="text-sm font-semibold  uppercase text-blueGray-700">Rang</span>
                                                </div>
                                                <div className="flex flex-row flex-wrap justify-between">
                                                  <div className="lg:mr-2 p-3 text-center">
                                                      <span className="text-xl font-bold block uppercase tracking-wide text-black">
                                                          {second.nombre_projet?second.nombre_projet:0}
                                                      </span>
                                                      <span className="text-sm font-semibold  uppercase text-teal-500">Projet</span>
                                                  </div>
                                                  <div className="lg:mr-2 p-3 text-center">
                                                      <span className="text-xl font-bold block uppercase tracking-wide text-black">
                                                          {second.point_experience}
                                                      </span>
                                                      <span className="text-sm font-semibold  uppercase text-teal-500">Point</span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                      <div style={styles.content_streak}>
                                            <p className="text-white"style={styles.nom_user}>Streak</p>
                                              <img
                                                src= { streak_url.trim()+second.user_github}
                                                className="rounded-t-lg"
                                                alt = "..."
                                                />
                                      </div>
                                </div>
                        </div>
                        )}
                        {third &&(
                        <div className="hover:-mt-4 duration-500 relative flex flex-col w-1/5 break-words bg-orange-500 h-1/4 rounded mt-1/6 xl:mb-0 shadow-lg">
                            <div className=" w-full">
                                        <div className="relative w-10/12 pr-4 max-w-full flex-grow flex-1">
                                            <span className = "h-12 w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                                                <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = {third.user_github_pic?third.user_github_pic: require("../../assets/img/team-1-800x800.jpg").default }/>
                                            </span>
                                            <span className="font-semibold text-xl text-black">
                                               {third.prenom}
                                            </span>
                                        </div>   
                                        <div className=" mx-auto w-full px-2 text-center mt-1/2">
                                              <div className="bg-white flex flex-col flex-wrap px-1 py-4 lg:pt-4 pt-8">
                                                <div className="lg:mr-2 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
                                                      3
                                                    </span>
                                                    <span className="text-sm font-semibold  uppercase text-orange-500">Rang</span>
                                                </div>
                                                <div className="flex flex-row flex-wrap justify-between">
                                                  <div className="lg:mr-2 p-3 text-center">
                                                      <span className="text-xl font-bold block uppercase tracking-wide text-black">
                                                          {third.nombre_projet?third.nombre_projet:0}
                                                      </span>
                                                      <span className="text-sm font-semibold  uppercase text-teal-500">Projet</span>
                                                  </div>
                                                  <div className="lg:mr-2 p-3 text-center">
                                                      <span className="text-xl font-bold block uppercase tracking-wide text-black">
                                                          {third.point_experience}
                                                      </span>
                                                      <span className="text-sm font-semibold  uppercase text-teal-500">Point</span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                      <div style={styles.content_streak}>
                                            <p style={styles.nom_user}>Streak</p>
                                              <img
                                                src= { streak_url.trim()+third.user_github}
                                                className="rounded-t-lg"
                                                alt = "..."
                                                />
                                      </div>
                            </div>
                        </div>
                        )}
                        {forth&&(
                        <div className="hover:-mt-4 duration-500 relative flex flex-col w-1/5 break-words bg-teal-700 h-1/4 rounded mt-1/8 xl:mb-0 shadow-lg">
                            <div className=" w-full">
                                        <div className="relative w-10/12 pr-4 max-w-full flex-grow flex-1">
                                            <span className = "h-12 w-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" >
                                                <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = { forth.user_github_pic?forth.user_github_pic:require("../../assets/img/team-1-800x800.jpg").default }/>
                                            </span>
                                            <span className="font-semibold text-xl text-black">
                                                {forth.prenom}
                                            </span>
                                        </div>   
                                        <div className=" mx-auto w-full px-2 text-center mt-1/2">
                                              <div className="bg-white flex flex-col flex-wrap px-1 py-4 lg:pt-4 pt-8">
                                                <div className="lg:mr-2 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-emerald-500">
                                                      4
                                                    </span>
                                                    <span className="text-sm font-semibold  uppercase text-emerald-500">Rang</span>
                                                </div>
                                                <div className="flex flex-row flex-wrap justify-between">
                                                  <div className="lg:mr-2 p-3 text-center">
                                                      <span className="text-xl font-bold block uppercase tracking-wide text-black">
                                                          {forth.nombre_projet?forth.nombre_projet:0}
                                                      </span>
                                                      <span className="text-sm font-semibold  uppercase text-teal-500">Projet</span>
                                                  </div>
                                                  <div className="lg:mr-2 p-3 text-center">
                                                      <span className="text-xl font-bold block uppercase tracking-wide text-black">
                                                          {forth.point_experience}
                                                      </span>
                                                      <span className="text-sm font-semibold  uppercase text-teal-500">Point</span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                      <div style={styles.content_streak}>
                                            <p style={styles.nom_user}>Streak</p>
                                              <img
                                                src= { streak_url.trim()+forth.user_github}
                                                className="rounded-t-lg"
                                                alt = "..."
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
                                                <img alt = "..." className = "w-full rounded-full align-middle border-none shadow-lg" src = {fifth.user_github_pic?fifth.user_github_pic: require("../../assets/img/team-1-800x800.jpg").default }/>
                                            </span>
                                            <span className="font-semibold text-xl text-black">
                                                {fifth.prenom}
                                            </span>
                                        </div>   
                                        <div className=" mx-auto w-full px-2 text-center mt-1/2">
                                              <div className="bg-white flex flex-col flex-wrap px-1 py-4 lg:pt-4 pt-8">
                                                <div className="lg:mr-2 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-red-500">
                                                      5
                                                    </span>
                                                    <span className="text-sm font-semibold  uppercase text-red-500">Rang</span>
                                                </div>
                                                <div className="flex flex-row flex-wrap justify-between">
                                                  <div className="lg:mr-2 p-3 text-center">
                                                      <span className="text-xl font-bold block uppercase tracking-wide text-black">
                                                          {fifth.nombre_projet?fifth.nombre_projet:0}
                                                      </span>
                                                      <span className="text-sm font-semibold  uppercase text-teal-500">Projet</span>
                                                  </div>
                                                  <div className="lg:mr-2 p-3 text-center">
                                                      <span className="text-xl font-bold block uppercase tracking-wide text-black">
                                                          {fifth.point_experience?fifth.point_experience:0}
                                                      </span>
                                                      <span className="text-sm font-semibold  uppercase text-teal-500">Point</span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                      <div style={styles.content_streak}>
                                            <p style={styles.nom_user}>Streak</p>
                                              <img
                                                src= { streak_url.trim()+fifth.user_github}
                                                className="rounded-t-lg"
                                                alt = "..."
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