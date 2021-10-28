import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views


import Add_Member from "views/admin/AddMember"
import Add_Project from "views/admin/AddProject.js"

export default function Action() {
  return (
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
          <Switch>
            <Route path="/action/addmember" exact component={Add_Member}>
                <Add_Member/>
            </Route>
            <Route path="/action/addproject" exact component={Add_Project}>
                <Add_Project/>
            </Route>
          <FooterSmall absolute />
          </Switch>
        </section>
      </main>
    </>
  );
}
