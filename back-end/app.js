const path=require('path');
const _=require("lodash");
const bodyparser=require('body-parser');
const fileUpload=require('express-fileupload');


const app=express();
app.use(fileUpload());

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

const adminRoutes=require('./routes/admin');
app.use('api/auth',adminRoutes);

const userRoutes=require('./routes/user');
app.use('api/auth',userRoutes);

const membreRoutes=require('./routes/membre');
app.use('api/membre',membreRoutes);

const projectRoute=require('./routes/projects');
app.use('api/projects',projectRoutes);

module.exports= app;

