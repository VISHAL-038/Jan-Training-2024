// http to reload every page
// express to reload only that page
// express is middleware bw 
// var express= require('express')
// var app=express();
// app.get("/",function(req,res) // "/" is for home page
// {
//     res.send("<center><h1>this is home page</h1><center>")
// })
// app.get("/about",function(req,res) //for considering routes 
// {
//     res.send("<center><h1>this is about page</h1><center>")
// })
// app.get("/contact",function(req,res)
// {
//     res.send("<center><h1>this is contact page</h1><center>")
// }).listen(5000)


var express= require('express')
var app=express();
var link="<br><br><a style=background-color:red;text-decoration:none;font-weight:900 href='/'>home</a>&emsp;&emsp;<a href='/about'>about</a>&emsp;&emsp;<a href='/contact'>contact</a>" //&emsp; for spaces
app.get("/",function(req,res) // "/" is for home page
{
    res.send("<center><h1>this is home page</h1><center>"+link)
})
app.get("/about",function(req,res) //for considering routes 
{
    res.send("<center><h1>this is about page</h1><center>"+link)
})
app.get("/contact",function(req,res)
{
    res.send("<center><h1>this is contact page</h1><center>"+link)
}).listen(5000)
