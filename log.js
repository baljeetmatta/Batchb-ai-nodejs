// const app=require("./app");
// //object ->app

// //x=1;

// console.log(app.url);
// app.log("message");


// const app=require("./app");

// console.log(app.url);
// app.log("message");

//CORE MODULES
//os/path/fs/events/http
// const os=require("os");
// console.log(os.freemem());

// console.log(__filename);
// console.log(__dirname);


// const path=require("path");
// console.log(path.parse(__filename));
// console.log(path.join("/abc","def"));
const fs=require("fs");
//console.log(fs.readdirSync("./"));
// fs.readdir("./x",(err,data)=>{
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log("Data",data);
//     }
// })


// const data=fs.readFileSync("./data.txt","utf-8")
// console.log("Another Code");

// console.log(data);

fs.readFile("./data.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error",err);
    }else{
        console.log("Data",data);
    }
});

console.log("Another");

fs.writeFileSync("./data1.txt","Hello World");

