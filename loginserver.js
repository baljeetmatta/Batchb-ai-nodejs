//Login/Signup -POST
//users.json
//Routes
//Login/Signup ->Routes auth
//Dashboard -protected
const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
const session=require("express-session");

app.use(cookieParser());
app.use(session({
    saveUninitialized:false, //empty-session,
    resave:false,
    secret:'asdsadsa23423@#$',
    cookie:{
        maxAge:1000*60*60*24,
       
    }
    //document.cookie

}))
app.use(express.static("public"));

app.use(express.urlencoded({extended:false}));

//express-session
//cookie-parser
const authRoutes=require("./routes/authRoutes");
const userRoutes=require("./routes/userRoutes");

const auth=(req,res,next)=>{
if(req.session.user)
    next();
else
    res.redirect("/auth/login");

}
app.use("/auth",authRoutes);
app.use("/users",auth,userRoutes);


app.listen(3000,(err)=>{
    if(err)
        console.log("Error in starting server...",err);
    else
        console.log("Server Started...")
})