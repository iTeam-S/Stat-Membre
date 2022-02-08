import CardStats from "./CardStats"
import React,{useState,useEffect} from "react";
import ProjectService from "../../utils/service/projectservice";
import MemberService from "../../utils/service/memberservice";


export default function Simplestat(){
     const [projectval,setProjval]=useState(0);
  const [memberact,setMemberact]=useState(0);
  const [freqmemberact,setFreqmemberact]=useState(0);
  const [prcent,setPrcent]=useState(0);
  useEffect(()=>{
    async function fetchData(){
    const memberT=20;
    try {
      await ProjectService.getAllvalide().then(response=>{
        
        if(response.data.length==null){
          setProjval(0)
        }
        setProjval(response.data[0].nb_valide)
      })
      await ProjectService.getPourcentage().then(response=>{
        
        setPrcent(response.data.pourcentage);
      })

      await MemberService.listmemberonproject().then(response=>{
        if(response.data.length==null){
          setMemberact(0)
        }
        setMemberact(response.data.length);
        let eff=((response.data.length)*100)/memberT;
        setFreqmemberact(eff);
      })
      
    } catch (error) {
      console.log(error);
      
    }
  }
  fetchData()
  },[])

     return (
          <div className="flex flex-wrap">
               <div className="w-full lg:w-9/12 xl:w-3/12 px-4">
                    <CardStats
                    statSubtitle="PARTICIPATION"
                    statTitle={memberact}
                    statArrow="up"
                    statPercent={freqmemberact}
                    statPercentColor="text-emerald-500"
                    statDescripiron="Membres en projets"
                    statIconName="fas fa-users"
                    statIconColor="bg-teal-500"
                    />
               </div>
               <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                    statSubtitle="COMMIT"
                    statTitle={2}
                    statArrow="down"
                    statPercent={3.48}
                    statPercentColor="text-red-500"
                    statDescripiron="Since last week"
                    statIconName="fas fa-chart-pie"
                    statIconColor="bg-red-500"
                    />
               </div>
               <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                    statSubtitle="PRODUCTION"
                    statTitle={projectval}
                    statArrow="up"
                    statPercent={prcent}
                    statPercentColor="text-emerald-500"
                    statDescripiron="Des projets"
                    statIconName="far fa-chart-bar"
                    statIconColor="bg-orange-500"
                    />
               </div>
      </div>
     )
}