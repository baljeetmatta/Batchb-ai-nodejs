const express=require("express");
const app=express();//createServer
const path=require("path");
const userRoutes=require("./routes/userRoutes");
const orderRoutes=require("./routes/orderRoutes");

app.use(express.static("public"));
app.use("/orders",orderRoutes);
app.use("/users",userRoutes);
// / -> /orders-> /orders/
// /details-> /orders-> /orders/details

app.use(express.urlencoded({extended:false}));
//false ->querystring->key/value
//true->qs->rich jsonSW

// app.get("/",(req,res)=>{

//    // res.write("Welcome to express");
//    // res.end();
//   // res.send("Welcome to Express");
// //res.sendFile
// //console.log(__dirname);
// //res.sendFile(__dirname+"/index.html")
// res.sendFile(path.join(__dirname,"./index.html"));

// //res.end();
// })
// /orders/-> Order Home page Order List
// /orders/detail ->Order Details
// /orders/update ->Order Update

// /users/
// /users/detail
// /users/update

// app.get("/orders/",(req,res)=>{
//     res.send("Order Home Page")
// })

// app.get("/orders/details",(req,res)=>{
//     res.send("Order Details")
// })
// app.get("/orders/update",(req,res)=>{
//     res.send("order update")
// })


app.listen(3000,(err)=>{
    if(err)
        console.log("Server not started, ",err);
    else
        console.log("Server Started...")

})
