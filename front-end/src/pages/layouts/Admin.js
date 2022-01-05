import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import HeaderStats from "../../components/Headers/HeaderStats.js";


// views
import FooterAdmin from "../../components/Footers/FooterAdmin.js";
import Dashboard from "../admin/Dashboard.js";
import Settings from "../admin/Settings.js";
import Tables from "../../components/Cards/CardTable";



export default function Admin({ membre, projet }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}                
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact >
                <Dashboard />
            </Route>                              
            <Route path="/admin/settings" exact >
                <Settings membre={membre} projet={projet}/>
            </Route>
            <Route path="/admin/tables" exact component={Tables}>
                <Tables />
            </Route>
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
