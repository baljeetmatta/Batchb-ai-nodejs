// // console.log("Hello");
// // const sayHello=()=>{

// //     console.log("Hello");
// // }
// // sayHello();
// //console.log(module);
// const url="http://mylogger.io/log";
// const log=(message)=>{
    
//     console.log(message);
// }

// // module.exports.URL=url;
// // module.exports.log=log;

// //module.exports={url,log};
// module.exports=url;
// module.exports=log;

const url="http://mylogger.io/log";
module.exports=url;
const log=(message)=>{
    
    console.log(message);
}
module.exports={log,url};
