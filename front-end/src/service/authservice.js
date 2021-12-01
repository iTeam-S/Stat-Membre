import React from "react";
import Axios from "axios";
import {AuthAxios} from "../apis/Stat"


  class AuthService {
    login(email, password) {
      return AuthAxios
        .post("/signin", {
          email,
          password
        })
        .then(response => {
          if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          return response.data;
        });
    }
  
    logout() {
      localStorage.removeItem("user");
    }
  
    register(prenom, email, password) {
      return AuthAxios.post("/signup", {
        prenom,
        email,
        password
      });
    }
  
    getCurrentUser() {
      return JSON.parse(localStorage.getItem('user'));;
    }
  }
  
  export default new AuthService();