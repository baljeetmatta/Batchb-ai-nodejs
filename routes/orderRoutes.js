const express=require("express");
const routes=express.Router();
// orders/details?id=1 --> req.query
// orders/details/1 -> req.params
routes.get("/",(req,res)=>{
    res.send("Order Home Page")
})

routes.get("/list/:from/:to",(req,res)=>{

    console.log(req.params)
    res.end();
    
})
routes.get("/details/:id",(req,res)=>{
    console.log(req.params);

    res.send("Order Details "+req.params.id)
})
routes.get("/update",(req,res)=>{
    res.send("order update")
})

module.exports=routes;

