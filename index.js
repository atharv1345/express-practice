// fs is come with buil node js 
// express bring form internet to your machine
// to import very famous labrary node js
const express = require("express");
const bodyParser = require("body-parser");
const port = 5000
const app = express();
app.use(express.json());

// fs.readfile("path","utf-7",())
// fs --> filesystem - read files on system , write to files on system
// create a todo app that lets users store todos on the server
app.post('/backend',function(req,res){
    const message = res.body.message;
    console.uselog(message);
})



app.get("/", function(req ,res) {
    a = 0;
    console.log("i reached finally");
    for (let i =0; i<100; i++)
        {a= a+1;

        }   
        app.get("/atharv/information", function(req,res){
        // headers , body,query parameters
        // do machine learning model
        res.send("<b>name:atharv singh , age: 18<b>")
        res.json({
            name: " atharv singh",
            age: 28
        })
        })
     // database call
res.send('<b> hii i am atharv')  
})
app.listen(port) 


// chatgpt devleoper can write a code
// run a machine learning model
// app.post('/backend-api/conversation', function(req, res){
// res.send('hello world')
// })



// Q
// try to create a http server from scratch in c
// create an http server in rust using actix-web
// create an http server in golang using the gurrila framwork
//// spring boot java

// headers
/*
app.get('/conversations', (req ,res) => {
console.log(req.headers)
res.send({
    mes: "i love you"
})
    
{
Ans = "msg":"i love you"
}
'
// app.post('/conversations'(req,body):
res.send({
msg:"2+2=4"
})
*/
