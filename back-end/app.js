const express=require("express");
const exphbs=require('express-handlebars');
const bodyParser=require('body-parser');
const path=require('path');
const cors = require("cors");
const db=require('./config/database');
const app=express();

var corsOptions = {
    origin: "http://localhost:5000"
  };

  app.use(cors(corsOptions));

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));



db.authenticate()
    .then(()=>console.log("connected to the database,,,"))
    .catch((err)=>console.log("Errer:"+err))

//ROUTES
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });

app.use('/project',require('./routes/project'));
app.use("/members",require('./routes/member'));
app.use("/criteres",require('./routes/criteres'));


app.require('./routes/authroutes');
app.require('./routes/userroutes');





const PORT =5000|| process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})
