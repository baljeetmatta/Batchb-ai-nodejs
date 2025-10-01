
// const express=require("express");
// const routes=express.Router();

// routes.get("/",(req,res)=>{
//     res.send("User Home Page")
// })

// routes.get("/details",(req,res)=>{
//     res.send("User Details")
// })
// routes.get("/update",(req,res)=>{
//     res.send("User update")
// })

// module.exports=routes;


const express=require("express");
const routes=express.Router();
// const auth=(req,res,next)=>{
// if(req.session.user)
//     next();
// else
//     res.redirect("/auth/login");

// }
routes.get("/logout",(req,res)=>{

    req.session.destroy();
    res.redirect("/auth/login");


})
// routes.get("/dashboard",auth,(req,res)=>{

//     res.send("Dashboard Page "+req.session.user+"<br/><a href='/users/logout'>Logout</a>");


// })
routes.get("/dashboard",(req,res)=>{

    res.send("Dashboard Page "+req.session.user+"<br/><a href='/users/logout'>Logout</a>");


})
module.exports=routes;

