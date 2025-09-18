const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
    console.log(req.url);

    console.log("Server Created");
    if(req.url==="/")
    {
        fs.readFile("index.html",(err,data)=>{  
            res.write(data);
            res.end();
            

        });

        

    }
    else{
        res.write("Invalid Request");
        res.end();

    }
    //res.write("Hello World");
    //res.end();

});

server.listen(3000);

