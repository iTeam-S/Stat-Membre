import React,{useState,useEffect} from "react";


import ProjectService from "../../utils/service/projectservice";
import MemberService from "../../utils/service/memberservice";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  const [projectval,setProjval]=useState([]);
  const [memberact,setMemberact]=useState(0);
  const [freqmemberact,setFreqmemberact]=useState(0);

  useEffect(async()=>{
    const memberT=40;
    try {
      await ProjectService.getAllvalide().then(response=>{
        if(response.data.length==null){
          setProjval(0)
        }
        setProjval(response.data.length)
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
  },[])
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-900 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PARTICIPATION DES MEMBRES"
                  statTitle={memberact}
                  statArrow="up"
                  statPercent={freqmemberact}
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-teal-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="COMMIT"
                  statTitle="2,356"
                  statArrow="down"
                  statPercent="3.48"
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
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last yer"
                  statIconName="fas fa-users"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
