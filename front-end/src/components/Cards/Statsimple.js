import CardStats from "./CardStats"
import React,{useState,useEffect} from "react";
import ProjectService from "../../utils/service/projectservice";



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

      await ProjectService.getnbactif().then(response=>{
        console.log(response.data);
        if(response.data==null){
          setMemberact(0)
        }
        setMemberact(response.data);
        let eff=((response.data)*100)/memberT;
        setFreqmemberact(eff);
      })
      
    } catch (error) {
      console.log(error);
      
    }
  }
  fetchData()
  },[])

     return (
          <div className="flex flex-row">
              <div className="w-6/12 lg:w-6/12 xl:w-6/12 px-4">
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
               <div className="w-6/12 lg:w-6/12 xl:w-6/12 px-4">
                    <CardStats
                    statSubtitle="PRODUCTION"
                    statTitle={projectval}
                    statArrow="up"
                    statPercent={prcent}
                    statPercentColor="text-emerald-500"
                    statDescripiron="Des projets"
                    statIconName="fas fa-chart-bar"
                    statIconColor="bg-orange-500"
                    />
               </div>
      </div>
     )
}