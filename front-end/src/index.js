import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch} from "react-router-dom";


import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";


// layouts
import Settings from "./components/Cards/CardSettings"
import Admin from "./pages/layouts/Admin.js";
import Login from "./pages/auth/Login";
import AddMember from "./pages/admin/AddMember";
import AddProject from "./pages/layouts/Addproject";
import CheckProject from "./pages/admin/CheckMemberProject";
import UpdateProject from "./pages/layouts/Updateproject";
import MemberProject from "./pages/layouts/MemberProject";
import DeleteProjectMember from "./pages/admin/DeleteProjectMember";
import ProjectMember from "./pages/admin/ProjectMember";
import {AuthService} from "./utils/service/authservice";
import MemberList from "./pages/Members/Members";
import Topfive from "./pages/Topfive/TopFive";
import AdminRoute from "./pages/private/AdminRoutes"
import UserRoute from "./pages/private/UserRoutes";
import {ProjectContextProvider} from "./utils/context/ProjectContext"
import {MemberContextProvider} from "./utils/context/MemberContext"
import {CritereContextProvider} from "./utils/context/CritereContext"
import ValideProjet from "./pages/admin/ValideProjet"





// views without layouts

import Landing from "./pages/Landing/Landing";
import Profile from "./pages/Profile/Profile";
import Index from "./pages/Home/Index";
import Project from "./pages/Projets/projets";
import Errorpage from "pages/error/Error";




const memberUrl = "http://localhost:8000/api/v1/member/getAll";
const projectUrl = "http://localhost:8000/api/v1/project/getAll";
const commitURL = "https://api.github.com/repos/iTeam-S/Website/commits?sha=main&fbclid=IwAR2ng7lV56lHqCdSiyReSkXB4b3LFhbmLb0aNM8aeGYYwTtG4Vlprp9KYbE";
const listRepos = "https://api.github.com/orgs/iTeam-S/repos";

const App = () => {
    const User=AuthService.getCurrentUser();
  //get member

  const [member, setMember] = useState([]);
    useEffect(() => {
        axios.get(memberUrl)
             .then((response) => {
                const users =response;
                setMember(users);
        });
    }, []);
    // get project
    const [ project, setProject] = useState([]);
    useEffect(() => {
      axios.get(projectUrl)
          .then((response) => {
              const projet = response;
              setProject(projet);
        });
    }, []);

    // get commit
    // eslint-disable-next-line no-unused-vars
    const [ commit, setCommit] = useState([]);
    useEffect(() => {
      axios.get(commitURL)
          .then((response) => {
              const commit = response;
              setCommit(commit);
        });
    }, []);

    //get repos
    // eslint-disable-next-line no-unused-vars
    const [ repos, setRepos] = useState([]);
    useEffect(() => {
         axios.get(listRepos)
          .then((response) => {
              const repos = response;
              setRepos(repos);
        });
    }, []);
        return (
            <CritereContextProvider>
                <ProjectContextProvider>
                    <MemberContextProvider>
                      <BrowserRouter>
                          <Switch>
                              {/* add routes with layouts */}
                              <Route exact path="/views/public/memberlist">
                                      <MemberList />
                              </Route>
                              <Route exact path="/views/public/projets">
                                      <Project />
                              </Route>
                              <Route path="/views/public/top5" exact>
                                  <Topfive/>
                              </Route>
                              <Route path="/auth/login">
                                  <Login />
                              </Route>
                              <Route path="/" exact>
                                  <Index commit={commit} repos={repos}/>
                              </Route>
                              <Route exact path="/public/project/:nom/mproject">
                                  <ProjectMember/>
                              </Route>
                              <Route path="/landing" exact>
                                  <Landing data={member}/>
                              </Route>
                              <Route path="/profile/:prenom" exact>
                                  <Profile data={member}/>
                              </Route>
                              
                            
                            {/*User Routes */}
                            
                            
                              <UserRoute exact path="/admin/project/addproject">
                                  <AddProject/>
                              </UserRoute>
                              <UserRoute exact path="/settings/:prenom">
                                  <Settings data={member}/>
                              </UserRoute>
                              

                             {/*Admin routes */}
                            <AdminRoute exact path="/admin/valide/projet">
                                <ValideProjet/>
                            </AdminRoute>
                              <AdminRoute exact path="/admin/dashboard">
                                  <Admin membre={member} projet={project}/>:
                              </AdminRoute>
                              <AdminRoute exact path="/admin/member/addmember">
                                  <AddMember/>
                              </AdminRoute>
                              
                              <AdminRoute exact path="/admin/project/:id/update">
                                  <UpdateProject/>
                              </AdminRoute>
                              <AdminRoute exact path="/admin/check/checkmemberproject">
                                  <CheckProject membre={member}/>
                              </AdminRoute>
                              <AdminRoute exact path="/admin/member/:membername/allproject">
                                  <MemberProject/>
                              </AdminRoute>
                              <AdminRoute exact path="/admin/delete/projectmember">
                                  <DeleteProjectMember membre={member} projet={project}/>
                              </AdminRoute>
                              <Route>
                                    <Errorpage/>
                              </Route>
                          </Switch>
                      </BrowserRouter>
                    </MemberContextProvider>
                </ProjectContextProvider>
            </CritereContextProvider>
          );
    }
const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
