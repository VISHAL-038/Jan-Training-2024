var express = require("express");
const app = express();
app.set("view engine", "ejs");
const cokieParser = require('cookie-parser')
const session = require('express-session');
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    uname: String,
    password: String
})

const User = mongoose.model("logins",userSchema);

mongoose.connect("mongodb://localhost:27017/nodedb",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const oneDay = 1000*60*60*24;

app.use(session({
    secret: 'this is my secret key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: oneDay }
  }));

app.get("/",function(req,res){
    const session = req.session;
    if(session.loguser){
        res.render('home',{uname: session.loguser, st: true});
    }
    else{
        res.render('home',{uname:"" ,st:false});
    }
});

app.get('/insert', function (req, res) {
    const session = req.session;
    if (req.query.submit) {
        const un = req.query.un;
        const p = req.query.p;
        User.findOne({ uname: un })
            .then(result => {
                if (result) {
                    res.render('insert', { msg: un + ' Already exist', uname: session.loguser });
                } else {
                    const newUser = new User({ uname: un, password: p });
                    return newUser.save();
                }
            })
            .then(result => {
                res.render('insert', { msg: un + ' saved successfully ' + p, uname: session.loguser })
            })
            .catch(err => {
                // Handle the error appropriately, e.g., render an error view or send an error response
                res.render('error', { error: err.message }); // Rendering an error view
                // Or you can send an error response with an appropriate HTTP status code
                // res.status(500).send('Internal Server Error');
            });
    } else {
        res.render('insert', { msg: "", uname: session.loguser });
    }
});

app.get('/login',function(req,res){
    if(req.query.login){
        const un = req.query.un;
        const p = req.query.p;
        User.findOne({uname : un,password:p})
        .then(result=>{
            if(result){
                const session = req.session;
                session.loguser=un;
                res.redirect('/')
            }
            else{
                res.render('login',{note:"Invalid user and password"})
            }
        })
        .catch(err=>{
            res.render("error in your code"+err)
        });
        }else{
            res.render('login',{msg:""})
    }
})
app.get('/show',function(req,res){
    const session= req.session;
    if(session.loguser){
        res.render('show',{uname:session.loguser})
    }
    else{
        res.redirect('/login')
    }
})

app.get('/delete',function(req,res){
    const session = req.session;
    if(session.loguser){
        res.render('delete',{uname:session.loguser});
    }
    else{
        res.redirect('login');
    }
})

app.get('/update',function(req,res){
    const session = req.session;
    if(session.loguser){
        res.render('update',{uname:session.loguser});
    }
    else{
        res.redirect('/login');
    }
})

app.get('/lout',function(req,res){
    req.session.destroy();
    res.redirect('/');
}).listen(5000)