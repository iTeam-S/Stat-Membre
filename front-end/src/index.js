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
import MemberList from "./pages/Members/Members";
import Topfive from "./pages/Topfive/TopFive";
import AdminRoute from "./pages/private/AdminRoutes"
import UserRoute from "./pages/private/UserRoutes";
import {ProjectContextProvider} from "./utils/context/ProjectContext"
import {MemberContextProvider} from "./utils/context/MemberContext"
import ValideProjet from "./pages/admin/ValideProjet"
import NoterOneMembre from "./pages/admin/NoterUnMembre"
import ProjetdMembre from "./pages/Projets/Projetdmembre"





// views without layouts

import Profile from "./pages/Profile/Profile";
import Index from "./pages/Home/Index";
import Project from "./pages/Projets/projets";
import Errorpage from "pages/error/Error";
import Streak from "./pages/Landing/Streak";





const memberUrl = "http://localhost:8000/api/v1/member/getAll";


const App = () => {
  //get member

  const [member, setMember] = useState([]);
    useEffect(() => {
        axios.get(memberUrl)
             .then((response) => {
                const users =response;
                setMember(users);
        });
    },[]);
        return (
                <ProjectContextProvider>
                    <MemberContextProvider>
                      <BrowserRouter>
                          <Switch>
                              {/* add routes with layouts */}
                              <Route exact path="/views/public/memberlist">
                                      <MemberList />
                              </Route>
                              <Route exact path="/views/public/projetdmembre/:id">
                                      <ProjetdMembre />
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
                                  <Index />
                              </Route>
                              <Route path="/streak" exact>
                                  <Streak data={member}/>
                              </Route>
                              <Route exact path="/public/project/:id/mproject">
                                  <ProjectMember/>
                              </Route>
                              <Route path="/profile/:prenom" exact>
                                  <Profile />
                              </Route>
                              
                            
                            {/*User Routes */}
                            
                            
                              <UserRoute exact path="/admin/project/addproject">
                                  <AddProject/>
                              </UserRoute>
                              <UserRoute exact path="/settings/:prenom">
                                  <Settings />
                              </UserRoute>
                              

                             {/*Admin routes */}
                            <AdminRoute exact path="/admin/valide/projet/:id">
                                <ValideProjet/>
                            </AdminRoute>
                            <AdminRoute exact path="/admin/project/noterone/:id_membre/:id_projet">
                                <NoterOneMembre/>
                            </AdminRoute>
                              <AdminRoute exact path="/admin/dashboard">
                                  <Admin />:
                              </AdminRoute>
                              <AdminRoute exact path="/admin/member/addmember">
                                  <AddMember/>
                              </AdminRoute>
                              
                              <AdminRoute exact path="/admin/project/:id/update">
                                  <UpdateProject/>
                              </AdminRoute>
                              <AdminRoute exact path="/admin/check/checkmemberproject">
                                  <CheckProject />
                              </AdminRoute>
                              <AdminRoute exact path="/admin/member/:id/allproject">
                                  <MemberProject/>
                              </AdminRoute>
                              <AdminRoute exact path="/admin/delete/projectmember">
                                  <DeleteProjectMember />
                              </AdminRoute>
                              <Route>
                                    <Errorpage/>
                              </Route>
                          </Switch>
                      </BrowserRouter>
                    </MemberContextProvider>
                </ProjectContextProvider>
          );
    }
const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
