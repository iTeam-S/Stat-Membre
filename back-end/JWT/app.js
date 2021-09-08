const express=require("express");
const app=express();
const cors=require("cors");


//middleware
app.use(express.json);
app.use(cors());

//ROUTES

//register and login routes

const userRoutes=require("./routes/Auth")
app.use("api/auth",userRoutes);

app.listen(5000,()=>{
    console.log("server is running on port 5000");
});
