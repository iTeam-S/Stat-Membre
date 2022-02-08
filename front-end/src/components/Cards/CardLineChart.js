import React,{useEffect} from "react";
import Chart from "chart.js";
import moment from "moment";



import ProjectService from "../../utils/service/projectservice";

export default function CardLineChart() {
  useEffect(() => {
    async function CardLineData(){
    let project=[];
    const cdate=new Date();
    try {
      await ProjectService.getAllencours().then((response)=>{
          let i=0;
          let totalproj=0;
          while(i<response.data.length){
            if(moment(`${response.data[i].creation_date}`).isBefore(`${cdate}`) || moment(`${response.data[i].creation_date}`).isSame(`${cdate}`)){
              totalproj+=1;
            }
            i++;
          }
          project[cdate.getMonth()]=totalproj
          let anneactuelle=cdate.getFullYear();
          let anneAncien=moment(response.data[0].creation_date).year();
          if(anneactuelle!==anneAncien){
            project=[];
          }  
    })

      
    } catch (error) {
      console.log(error);
      
    }
    
    const config = {
      type: "line",
      data: {
        labels:[
          "Janvier",
          "Fevrier",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Jullet",
          "Août",
          "Septembre",
          "Octobre",
          "Novembre",
          "Decembre"

        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: project,
            fill: false,
          }
        ],
      },
      
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Projects Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Day",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "dark",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }
  CardLineData();
  }, []);
  
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full  shadow-lg rounded bg-teal-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                Overview
              </h6>
              <h2 className="text-white text-xl font-semibold">Projets en cours</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
