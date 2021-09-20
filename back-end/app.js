const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path=require("path");


const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


const db = require("./models");
const Role = db.role;

/*db.sequelize.sync();*/

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});


var corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "admin"
  });
}

const MemberRoute=require("./routes/member");
app.use("/api/members",MemberRoute);

const ProjectRoute=require("./routes/project");
app.use("/api/project",ProjectRoute);

const CritereRoute=require("./routes/criteres");
app.use("./api/criteres",CritereRoute);


//Authentification routes
require('./routes/authroutes')(app);
require('./routes/userroutes')(app);



module.exports=app;