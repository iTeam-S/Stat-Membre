import {AuthAxios} from "../apis/Stat"


  function login(mail,password){
    return AuthAxios.post("/signin",{
        mail,
        password
      
    }).then(response=>{
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    }).catch(error=>{
      return error.message;
    })

  }
  
  function logout(){
    return localStorage.removeItem("user");
  }
    
  function registerr(prenom,email,password){
    return AuthAxios.post("/signup", {
      prenom,
      email,
      password
    });
  }
  
  function getCurrentUser(){
    return JSON.parse(localStorage.getItem('user'));;
  }

  export const AuthService={
    login,
    logout,
    registerr,
    getCurrentUser
  }

  