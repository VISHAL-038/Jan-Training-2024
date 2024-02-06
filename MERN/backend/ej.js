const express = require('express');
const cors = require('cors')
const session = require('express-session');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const app = express();

mongoose.connect('mongodb://localhost:27017/nodevoting',{
    useNewUrlParser : true,
    useUnifiedTopology: true
})

const partySchema = new Schema({
    pname:String,
})
const Party = mongoose.model('parties',partySchema);

const voterSchema = new Schema({
    name: String,
    email: String,
    pass: String
})
const Voter = mongoose.model('voters',voterSchema);

const votenowSchema = new Schema({
   party: String,
   voter: String,
   dt: Date,
})
const VoteNow = mongoose.model('votenows',votenowSchema);

app.use(express.json());
app.use(cors({
    origin:['http://localhost:5173'],
    methods:["POST","GET"],
    credentials: true
}));

app.use(session({
    secret: "this is my secret key",
    saveUninitialized: true,
    resave:false
}));

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('home');
})

app.post('/party',async function(req,res){
    const p = req.body.p;
    const existingParty = await Party.findOne({pname:p});

    if(existingParty){
        res.send({msg: " Party already exists with name"+p,sucess:false})
    }
    else{
        const newParty = new Party({pname:p});
        await newParty.save();
        res.send({msg:"party added successfully with name"+p,sucess: true})
    }
});

app.post("/removeParty", async function(req,res){
    const p = req.body.p;
    const existingParty=await Party.findOne({pname:p})
    if(existingParty){
        await Party.deleteOne({pname:p});
        res.send({msg:p+"Remove Successfully"});
    }
    else{
        res.send({msg:"no such party exists"});
    }
});

app.post('/addVoter', async function (req, res) {
    const e = req.body.e;
    const n = req.body.n;
    const ps = Math.floor(Math.random() * (9999 - 1000) + 1000);

    const existingVoter = await Voter.findOne({ email: e });

    if (!existingVoter) {
        const newVoter = new Voter({ name: n, email: e, pass: ps });
        await newVoter.save();
        res.send({ msg: e + " voter added successfully with password " + ps, success: true });
    } else {
        res.send({ msg: "User with this email already exists", success: false });
    }
});

app.post('/removeVoter', async function (req, res) {
    const e = req.body.e;
    const existingVoter = await Voter.findOne({ email: e });

    if (existingVoter) {
        await Voter.deleteOne({ email: e });
        res.send({ msg: e + " Remove Successfully" });
    } else {
        res.send({ msg: "No such Voter Exists" });
    }
});

app.post('/login', async function (req, res) {
    const un = req.body.un;
    const p = req.body.p;

    const result = await Voter.findOne({ email: un, pass: p });

    if (result) {
        req.session.loguser = un;
        res.send({ msg: "Login successfully", success: true, uname: req.session.loguser });
    } else {
        res.send({ msg: "Invalid user and password", success: false, uname: "" });
    }
});

app.post('/vote', async function (req, res) {
    const p = req.body.p;
    const un = req.body.un;

    const existingVote = await VoteNow.findOne({ voter: un });

    if (existingVote) {
        const parties = await Party.find();
        res.send({ msg: "Already Voted, Vote Only Once", party: parties, success: false });
    } else {
        const newVote = new VoteNow({ party: p, voter: un, dt: new Date() });
        await newVote.save();

        const parties = await Party.find();
        res.send({ msg: "Thanks for your vote, your vote is valuable", party: parties, success: true });
    }
});

app.get('/getParty', async function (req, res) {
    const parties = await Party.find();
    res.send({ party: parties });
});

app.post('/checklogin', function (req, res) {
if (req.session.loguser) {
    res.send({ status: true, un: req.session.loguser });
} else {
    res.send({ status: false, un: "" });
}
});

app.get("/logout", function (req, res) {
req.session.destroy(function (err) {
    if (err) {
        console.error("Error destroying session:", err);
        res.send("Error destroying session");
    } else {
        res.send("Session destroyed successfully");
    }
});
});

app.get("/count", async function (req, res) {
  const result = await VoteNow.aggregate([
    {
      $group: {
        _id: "$party",
        totalvote: { $sum: 1 }
      }
    },
    {
      $project: {
        party: "$_id",
        totalvote: 1,
        _id: 0
      }
    }
  ]);

  res.send({ data: result });
});


app.listen(5000, () => {
console.log(`Server is running on port ${5000}`);
});




