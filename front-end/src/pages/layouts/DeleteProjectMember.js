import React from "react";

// components

import Navbar from "../../components/Navbars/AuthNavbar.js";


// views



import CheckProjectMember from "../admin/DeleteProjectMember"

export default function ProjectMember() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          ></div>
          <CheckProjectMember/>
        </section>
      </main>
    </>
  );
}