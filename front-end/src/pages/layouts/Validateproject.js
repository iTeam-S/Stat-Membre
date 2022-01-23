import React from "react";
import { Switch, Route} from "react-router-dom";

// components

import Navbar from "../../components/Navbars/AuthNavbar.js";
import FooterSmall from "../../components/Footers/FooterSmall.js";

// views

import Validate from "../admin/ValidateProject";


export default function Auth() {
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
            <Route path="/validate/project" exact component={Validate}/>
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}