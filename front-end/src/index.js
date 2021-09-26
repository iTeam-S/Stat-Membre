import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";


const memberUrl = "http://localhost:5000/api/members";
const projectUrl = "http://localhost:5000/api/project"


const App = () => {
  //get member
  const [member, setMember] = useState([]);
    useEffect(() => {
        axios.get(memberUrl)
             .then((response) => {
                const users = response.data;
                setMember(users);
        });
    }, []);
    // get project
    const [ project, setProject] = useState([]);
    useEffect(() => {
      axios.get(projectUrl)
          .then((response) => {
              const projet = response.data;
              setProject(projet);
        });
    }, []);




  return (
      <BrowserRouter>
        <Switch>
          {/* add routes with layouts */}
          <Route path="/admin">
              <Admin />
          </Route>
          <Route path="/auth">
              <Auth />
          </Route>
          {/* add routes without layouts */}
          <Route path="/landing" exact>
              <Landing data={member}/>
          </Route>
          <Route path="/profile/:id" exact>
              <Profile data={member}/>
          </Route>
          <Route path="/" exact>
            <Index data={project}/>
          </Route>
          {/* add redirect for first page */}
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
