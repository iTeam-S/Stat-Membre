import Chart from "chart.js";
import React,{useEffect,useState} from "react";
import moment from "moment";


import ProjectService from "../../utils/service/projectservice";


export default function CardBarChart() {
  useEffect(() => {
    async function CardData(){
    const projectv=[];
    const cdate=new Date();
    try {
      await ProjectService.getAllvalide().then((response)=>{
          let i=0;
          let totalproj=0;
          while(i<response.data.length){
            if(cdate.getMonth()===moment(response.data[i].validation_date).month()){
              totalproj+=1;
            }
            i++;
          }
          projectv[cdate.getMonth()]=totalproj
          
          
    })

      
    } catch (error) {
      console.log(error);
      
    }
    let config = {
      type: "bar",
      data: {
        labels: [
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
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#21212",
            borderColor: "#21212",
            data: projectv,
            fill: false,
            barThickness: 13,
          }
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Production Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }
  CardData();
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Production
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                Nombre de Projets validés
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
