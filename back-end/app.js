const path=require('path');
const _=require("lodash");
const bodyParser=require('body-parser');
const fileUpload=require('express-fileupload');
const cors=require("cors");


const app=express();
app.use(fileUpload());
app.use(express.json);
app.use(cors());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
  });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended:true,
  })
);

app.use(express.static('public'));

//user routes(login and register);
const userRoutes=require("./routes/Auth")
app.use("api/auth",userRoutes);

//member routes (crude membre)
const membreRoutes=require('./routes/membre');
app.use('api/membre',membreRoutes);
//projects routes (crude projects)
const projectRoute=require('./routes/projects');
app.use('api/projects',projectRoutes);

module.exports= app;
