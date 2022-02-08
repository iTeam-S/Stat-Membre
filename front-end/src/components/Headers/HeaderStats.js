import React from "react";


// components

import Simplestat from "../../components/Cards/Statsimple.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-900 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
              <Simplestat/>
            </div>
        </div>
      </div>
    </>
  );
}
