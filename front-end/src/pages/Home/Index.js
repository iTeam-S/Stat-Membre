/*eslint-disable*/
import React, { useContext, useEffect,useState } from "react";



import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import Footer from "../../components/Footers/Footer.js";
import Simplestat from "../../components/Cards/Statsimple";
import CardLineChart from "../../components/Cards/CardLineChart.js";
import CardProduction from "../../components/Cards/CardProduction.js";
import {ProjectContext} from "../../utils/context/ProjectContext"
import {MemberContext} from "../../utils/context/MemberContext"
import MemberService from "../../utils/service/memberservice"
import Main from "../../components/Cards/Main.js";


import Topfive from "../Topfive/TopFive";

import CardProjets from "../../components/Cards/CardProjets";
import Specialite from "../../components/Cards/Specialite.js";


export default function Index() {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    const {members}=useContext(MemberContext)
    const [topfive,setTopfive]=useState([])
    const {projects}=useContext(ProjectContext)
    useEffect(()=>{
        async function fetchTopfive(){
            await MemberService.getTopFive().then((response)=>{
                setTopfive(response.data)
            })
        }
        fetchTopfive();
    },[])
    return ( 
        <>
        <IndexNavbar fixed/>
            <Main/>
            <section className = "mt-48 md:mt-40 pb-40 relative bg-blueGray-100" >
                <div className = "-mt-20 bg-teal-700 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
                    style = {
                        { transform: "translateZ(0)" } } >
                    <svg className = "absolute bottom-0 overflow-hidden" xmlns = "http://www.w3.org/2000/svg" preserveAspectRatio = "none"
                        version = "1.1"
                        viewBox = "0 0 2560 100"
                        x = "0"
                        y = "0" >
                        <polygon className = "text-blueGray-100 fill-current" points = "2560 0 2560 100 0 100" ></polygon> 
                    </svg> 
                </div>                 
            <Specialite/>
                <section name="stat">
                    <div className="mx-1/5">
                        <div className="container overflow-hidden pb-20 mt-32">
                                <h3 className="text-center text-3xl font-semibold text-blueGray-600">
                                    Statistique de la communauté
                                </h3>
                                <div className="mx-1/10 mb-3  w-full">
                                    <div className="w-full">
                                        <Simplestat/>
                                    </div>
                                </div>
                                <div className="flex flex-wrap">
                                    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                                        <CardLineChart/>
                                    </div>
                                    <div className="w-full xl:w-4/12 px-4">
                                        <CardProduction />
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
                <section name="projet">
                    <div  className="mx-1/4">
                        <CardProjets />
                    </div>
                </section>
                <section name="top5">
                    <div>
                        <Topfive topfive={topfive} />
                    </div>
                </section>
            </section>
            <Footer/>
        </>
    );
}