import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";


// layouts

import Admin from "layouts/Admin.js";
import Login from "./views/auth/Login";
import AddMember from "layouts/Addmember";
import AddProject from "layouts/Addproject";
import CheckProject from "layouts/Checkmproject";
import UpdateProject from "layouts/Updateproject";
import UpdateMember from "layouts/Addmember";
import MemberProject from "layouts/MemberProject";
import DeleteProjectMember from "layouts/DeleteProjectMember";
import ProjectMember from "layouts/ProjectMember";
import AuthService from "./service/authservice"



// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import { ProjectContextProvider } from "context/ProjectContext";
import { MemberContextProvider } from "context/MemberContext";
import { CritereContextProvider } from "context/CritereContext";




const memberUrl = "http://localhost:8000/api/v1/member/getAll";
const projectUrl = "http://localhost:8000/api/v1/project/ProjectCritere";


const App = () => {
    const User=AuthService.getCurrentUser();
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
    if(User ==null){
        return(
        <ProjectContextProvider>
            <CritereContextProvider>
                <MemberContextProvider>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/auth/login">
                                <Login />
                            </Route>
                            <Route path="/" exact>
                                <Index data={project}/>
                            </Route>
                            <Route path="/landing" exact>
                            <Landing data={member}/>
                            </Route>
                            <Route path="/profile/:id" exact>
                                <Profile data={member}/>
                            </Route>
                            {/* add redirect for first page */}
                            <Redirect from="*" to="/" />
                        </Switch>
                    </BrowserRouter>
                </MemberContextProvider>
            </CritereContextProvider>
          </ProjectContextProvider>)
    }
    if(User.role=="user"){
        return(<ProjectContextProvider>
            <CritereContextProvider>
                <MemberContextProvider>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/admin/dashboard">
                                <Admin membre={member} projet={project}/>
                            </Route>
                            <Route exact path="/admin/project/addproject">
                                <AddProject/>
                            </Route>
                            <Route exact path="/auth/login">
                                <Login />
                            </Route>
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
                </MemberContextProvider>
            </CritereContextProvider>
          </ProjectContextProvider>)

    }

  return (
      <ProjectContextProvider>
        <CritereContextProvider>
            <MemberContextProvider>
                <BrowserRouter>
                    <Switch>
                        {/* add routes with layouts */}
                        <Route exact path="/admin/dashboard">
                            <Admin membre={member} projet={project}/>
                        </Route>
                        <Route exact path="/admin/member/addmember">
                            <AddMember/>
                        </Route>
                        <Route exact path="/admin/project/addproject">
                            <AddProject/>
                        </Route>
                        <Route exact path="/admin/project/:id/update">
                            <UpdateProject/>
                        </Route>
                        <Route exact path="/admin/member/:id/update">
                            <UpdateMember/>
                        </Route>
                        <Route exact path="/admin/check/checkmemberproject">
                            <CheckProject/>
                        </Route>
                        <Route exact path="/admin/member/:membername/allproject">
                            <MemberProject/>
                        </Route>
                        <Route exact path="/admin/delete/projectmember">
                            <DeleteProjectMember/>
                        </Route>
                        <Route exact path="/admin/project/:projectname">
                            <ProjectMember/>
                        </Route>
                        <Route path="/auth/login">
                            <Login />
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
            </MemberContextProvider>
        </CritereContextProvider>
      </ProjectContextProvider>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
