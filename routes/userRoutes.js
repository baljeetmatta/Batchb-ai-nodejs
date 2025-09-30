
const express=require("express");
const routes=express.Router();

routes.get("/",(req,res)=>{
    res.send("User Home Page")
})

routes.get("/details",(req,res)=>{
    res.send("User Details")
})
routes.get("/update",(req,res)=>{
    res.send("User update")
})

module.exports=routes;

