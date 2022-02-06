import React from "react";


// components

import CardProduction from "../../components/Cards/CardProduction.js";
import CardProjetsAdmin from "../../components/Cards/CardProjetsAdmin";



export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardProjetsAdmin />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardProduction />
          </div>
      </div>
    </>
  );
}
