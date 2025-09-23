//static site, page, js,css
const http = require('http');
const fs=require('fs');
const processRequest = (req, res) => {
    console.log(req.url);
    if(req.url === '/' || req.url === '/index.html') {
        // fs.readFile('index.html',"utf-8",(err,data)=>{
        //         res.write(data);
        //         res.end();
        // });
      res.write( readURL('index.html'));
      res.end();



        //res.write('<h1>Home Page</h1>');
    }
    else if (req.url === '/about.html'){
        res.write( readURL('about.html'));
        res.end();

        // fs.readFile('about.html',"utf-8",(err,data)=>{
        //         res.write(data);
        //         res.end();
        // });
    }
     else if (req.url === '/style.css'){
       res.write( readURL('style.css'));
       res.end();
       
        // fs.readFile('style.css',"utf-8",(err,data)=>{
        //         res.write(data);
        //         res.end();
        // });
    }
    else if (req.url === '/script.js'){
      res.write(  readURL('script.js'));
      res.end();

        // fs.readFile('script.js',"utf-8",(err,data)=>{
        //         res.write(data);
        //         res.end();
        // });
    }
    else
    {
   // res.write("Hello World");
     res.end();
    }

   

};
const pRequest=(req,res)=>{
    let filename="index.html";
    if (req.url=="/about")
        filename="about.html";

 else    if(req.url!="/")
    {
        filename=req.url.substring(1);

    }
    
     

    res.write(readURL(filename));
    res.end();

}

const server = http.createServer(pRequest);
server.listen(3000);


function readURL(filename){
    console.log(filename);
try{
return fs.readFileSync("./"+filename,"utf-8");
}catch(err)
{
    return "";


}
}