const http = require("http");
const fs = require("fs");
const url=require("url");
/*
GET
1. Existing Browser ->Server

Relibaility
Security
Limit 2KB

POSt

Sepearate Socket connection
No Limit



*/

const pRequest = (req, res) => {
    let filename = "index.html";

    console.log(req.url);
    const parsedUrl=url.parse(req.url,true);
    console.log(parsedUrl);

    //protocol://servername:portno/pathname?QueryString
    if(parsedUrl.pathname=="/save" && req.method=="GET")
    {
        //res.write("Request received... "+parsedUrl.query.username);

       // res.end();
        // 1. File existing Records
        //2. New Record
        //3. Write to file
        let users=[];

        fs.readFile("users.json","utf-8",(err,data)=>{
            //1. Read existing data
                if(err)
                    users=[];
                else
                    users=JSON.parse(data);
               const results= users.filter((item)=>{
                    if(item.username==parsedUrl.query.username)
                        return true;

                })
                if(results.length!=0)
                {
                    res.write("User already exists");
                    res.end();

                }
                else{
                //2. New Object
                users.push({
                    username:parsedUrl.query.username,
                    password:parsedUrl.query.password

                })
                //3. Write
                fs.writeFile("users.json",JSON.stringify(users),()=>{
                    res.write("User Created..");

                    res.end();
                })
            }
            

        })

    }
   else  if(parsedUrl.pathname=="/save" && req.method=="POST")
    {
        let body="";
        req.on("data",(chunk)=>{
                body+=chunk;

        })
        req.on("end",()=>{
            console.log(body);
            res.write(body);
            res.end();
        })


    }

    else if (req.url != "/") {
        filename = req.url.substring(1);
         res.write(readURL(filename));
    res.end();

    }
   
}


http.createServer(pRequest).listen(3000);

function readURL(filename) {
    console.log(filename);
    try {
        return fs.readFileSync("./" + filename, "utf-8");
    } catch (err) {
        return "";
    }
}
