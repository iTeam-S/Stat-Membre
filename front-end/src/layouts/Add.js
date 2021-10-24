import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views


import Add_Member from "views/add/AddMember.js"

export default function AddMember() {
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
            <Route path="/add/addmember" exact component = {Add_Member}/>
            <Redirect from="/add" to="/add/AddMember"/>
          <FooterSmall absolute />
          </Switch>
        </section>
      </main>
    </>
  );
}
