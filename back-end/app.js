const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");



const app = express();

const db = require("./models");
const Role = db.role;


db.sequelize.sync();


var corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome Stat-Membre." });
});

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


require("./routes/member")(app)
require("./routes/project")(app)
require("./routes/criteres")(app)
require('./routes/authroutes')(app);
require('./routes/userroutes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
