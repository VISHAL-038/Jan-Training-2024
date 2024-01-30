var express = require('express');
var app = express();
app.set('view engine','ejs');
var ar=[
    {"id":101, "name":"a","course":"bca"},
    {"id":102, "name":"b","course":"mca"},
    {"id":103, "name":"c","course":"btech"},
    {"id":104, "name":"d","course":"mtech"},
    {"id":105, "name":"e","course":"mba"},
    {"id":106, "name":"f","course":"bse"},
]
app.get("/insert",function(req,res){
    if(req.query.sumbit){
        var a=req.query.n;
        var b=req.query.c;
        var dt={
            "id":ar.length+101,
            "name":a,
            "course":b
        };
        ar.push(dt);
        res.redirect("/data")
    }
    else
    res.render('insert')
})
app.get("/",function(req,res){
    res.render("home")
})
app.get("/about",function(req,res){
    res.render("about",{name:"vis"});
})
app.get("/contact",function(req,res){
    res.render("contact");
})
app.get("/data",function(req,res){
    // ar=["node","php","react","python"];
    
    res.render("data",{data:ar});
})
app.get("/insert",function(req,res){
    res.render("insert");
}).listen(5000)
