import React from "react";

// components

import CardProduction from "components/Cards/CardProduction.js";
import CardProjets from "components/Cards/CardProjets.js";



export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardProjets />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardProduction />
          </div>
      </div>
    </>
  );
}
