import React from "react"

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";


import Update_project from "../views/admin/UpdateProject"

const UpdateProjectPage=()=>{
    return(
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
            <Update_project />
          <FooterSmall absolute />
        </section>
      </main>
    </>
    )
}
export default UpdateProjectPage