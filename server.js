"use strict"
const express= require('express')
const cors= require('cors')
const app= express();
const PORT=process.env.PORT || 4000;
app.use(cors());


const user= require ("./routes/user")
app.use("/user", user);





//use the agents file to handle  endpoints that start with /things


app.get("/", (req,res)=>{
    res.send("server is running")
});

app.listen(PORT,  err=>{
   if (err)
       return  console.log("ERROR", err);
   else
       console.log(`listening on port ${PORT}`)
});