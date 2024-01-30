var express  = require('express');
var app = express();
const user = require('./user')
const mongoose = require('mongoose');
const path = require('path')
const fs= require('fs')
const multer = require('multer');
app.set('view engine','ejs');
app.use(express.static('uploads'))
mongoose.set('strictQuery',true);

mongoose.connect("mongodb://localhost:27017/mydb",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const uploadPath = path.join(__dirname,'uploads');

const storage = multer.diskStorage({
    destination: function (req, file, cb){

        fs.mkdirSync(uploadPath, {recursive:true});
        cb(null,uploadPath);
    },
    filename: function (req,file,cb){
        return cb(null,file.originalname);
    },
});

const upload = multer({storage});

app.use(express.urlencoded({extended: false}));
app.get("/",function(req,res){
    res.render("index");

});
app.get("/Allimage", async function (req, res) {
    try {
        var data = await user.find();
        res.render("Allimage", { data: data });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});


app.post('/upload',upload.single('profileimage'),async function(req,res){
    try{

        const { originalname} = req.file;


        const imageDocument = new user({
                originalname,
        });


        const result = await imageDocument.save();
        console.log(result);

        res.render('index',{msg: "Recorded Added Successfully", imagePath: req.file.path})
    }
    catch(error){
        console.error("Error:",error.message);
        res.render('index',{msg:"Error saving record",imagePath:null});
    }
})
.listen(4000)