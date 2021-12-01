import Chart from "chart.js";
import React,{useEffect,useState} from "react";
import ProjectService from "../../service/projectservice";
import moment from "moment";

export default function CardBarChart() {
  
  React.useEffect(async() => {
    const projectv=[,,,,,,,,,,3,,];
    const cdate=new Date();
    try {
      await ProjectService.getAllvalide().then((response)=>{
          if(moment(`${response.data[0].validation_date}`).isBefore(`${cdate}`) || moment(`${response.data[0].validation_date}`).isSame(`${cdate}`)){
            let moisActuelle=cdate.getMonth();
            let moisAncien=moment(response.data[0].validation_date).month();
            if(moisActuelle != moisAncien){
              projectv.splice(moisActuelle,1,response.data.length);
            }
          } 
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
