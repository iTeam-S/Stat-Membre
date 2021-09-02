
//------------------create project----------------------------------------------------------
exports.createProject=(async(req,res)=>{
    const {name,repos,delai}=req.body;
    try {
        const qst="INSERT INTO projects(nom,repos,delai) VALUES($1,$2,$3) RETURNING * ";
        const newProject=await pool.query(qst,[name,repos,delai]);
        res.json(newProject.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});



//------------------read project------------------------------------------------------------
exports.getAllProject=(async(req,res)=>{
    try {
        const allProject=await pool.query("SELECT * FROM projects");
        res.json(allProject.rows);
        
    } catch (err) {
        console.error(err.message);
    }        
});



exports.getOneProject=(async(req,res)=>{
    const {name}=req.params;
    try {
        const prjt=await pool.query("SELECT * FROM projects WHERE nom=$1",[name]);
        res.json(prjt.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }       
});

//------------------update project-----------------------------------------------------------
exports.updateProject=(async(req,res)=>{
    const {nom,repos,delai}=req.body;
    const {name}=req.params;
    try {
        const upproject=await pool.query("UPDATE projects SET nom=$1,repos=$1,repos=$3,delai=$4",[nom,repos,delai]);
        res.json(upprojet.rows);
        
    } catch (err) {
        console.error(err.message);
        
    }
});



//-----------------delete project------------------------------------------------------------------
exports.deleteProject=(async(req,res)=>{
    const {name}=req.params;
    try {
        const delproject=await pool.query("DELETE * FROM project WHERE nom=$1"[name]);
        res.json("Project deleted");
        
    } catch (err) {
        console.error(err.message);
        
    }
});



//ADMIN ADDS MEMBER AND HIS TASK ON A PROJECT




//ADMIN EVALUATE PROJECT


































//ADMIN CRUD-PROJECT


//------------------create project----------------------------------------------------------

app.post("/projects",async(req,res)=>{
    const {name,repos,delai}=req.body;
    try {
        const qst="INSERT INTO projects(nom,repos,delai) VALUES($1,$2,$3) RETURNING * ";
        const newProject=await pool.query(qst,[name,repos,delai]);
        res.json(newProject.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})



//------------------read project------------------------------------------------------------

app.get("/projects",async(req,res)=>{
    try {
        const allProject=await pool.query("SELECT * FROM projects");
        res.json(allProject.rows);
        
    } catch (err) {
        console.error(err.message);
    }        
    }
});

app.get("/projects/:nom",async(req,res)=>{
    const {name}=req.params;
    try {
        const prjt=await pool.query("SELECT * FROM projects WHERE nom=$1",[name]);
        res.json(prjt.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }       
    }
})

//------------------update project-----------------------------------------------------------


app.put("/projects/:nom",async(req,res)=>{
    const {nom,repos,delai}=req.body;
    const {name}=req.params;
    try {
        const upproject=await pool.query("UPDATE projects SET nom=$1,repos=$1,repos=$3,delai=$4",[nom,repos,delai]);
        res.json(upprojet.rows);
        
    } catch (err) {
        console.error(err.message);
        
    }
})



//-----------------delete project------------------------------------------------------------------
app.delete("/:nom",async(req,res)=>{
    const {name}=req.params;
    try {
        const delproject=await pool.query("DELETE * FROM project WHERE nom=$1"[name]);
        res.json("Project deleted");
        
    } catch (err) {
        console.error(err.message);
        
    }
})



//ADMIN ADDS MEMBER AND HIS TASK ON A PROJECT




//ADMIN EVALUATE PROJECT


const port=process.env.PORT || 5000;
app.listen(port,()=> console.log("Listening on port "  + port));