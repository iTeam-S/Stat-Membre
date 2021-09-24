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

const baseUrl = "http://localhost:5000/api/members";


const App = () => {
  const [post, setPost] = useState(null);
    useEffect(() => {
        axios.get(
            baseUrl
           ).then((response) => {
            const users = response.data;
            setPost(users);
        });
    }, []);
  return (
      <BrowserRouter>
        <Switch>
          {/* add routes with layouts */}
          <Route path="/admin" component={Admin} />
          <Route path="/auth" component={Auth} />
          {/* add routes without layouts */}
          <Route path="/landing" exact>
              <Landing data={post}/>
          </Route>
          <Route path="/profile/:id" exact>
              <Profile data={post}/>
          </Route>
          <Route path="/" exact component={Index} />
          {/* add redirect for first page */}
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
