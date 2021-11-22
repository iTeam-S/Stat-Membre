import React,{useEffect,useState} from "react";
import Chart from "chart.js";
import ProjectService from "../../service/projectservice";
import moment from "moment";

export default function CardLineChart() {
  const [line1,setLine1]=useState(12);
  const [proj,setProj]=useState([]);
  const [NomMois,setNomMois]=useState([
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
    ]

  )

  useEffect(async() => {
    const project=[4,5,6,4,2,8,8,2,4,6];
    const mois=[NomMois[0],NomMois[1],NomMois[2],NomMois[3],NomMois[4],NomMois[5],NomMois[6],NomMois[7],NomMois[8],NomMois[9]];
    const cdate=new Date();
    try {
      await ProjectService.getAllencours().then((response)=>{
        console.log(response.data[0].creation_date)
          if(moment(`${response.data[0].creation_date}`).isBefore(`${cdate}`) || moment(`${response.data[0].creation_date}`).isSame(`${cdate}`)){
            let moisActuelle=cdate.getMonth();
            let moisAncien=moment(proj.creation_date).month();
            if(moisActuelle != moisAncien){
              project.push(response.data.length)
              mois.push(NomMois[moisActuelle])
            }
            
          }
    })

      
    } catch (error) {
      console.log(error);
      
    }
    
    const config = {
      type: "line",
      data: {
        labels: mois,
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
  }, []);
  
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full  shadow-lg rounded bg-emerald-500">
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
