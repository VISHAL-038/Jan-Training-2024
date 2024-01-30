var express = require("express");
const mongoose = require("mongoose");
const user = require("./mongoo");
const user1 = require("./mongoo1");
var app = express();
mongoose.set("strict", true);
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost:27017/onlinevotting", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// check the connection
const db = mongoose.connection;
db.on("error", (err) => {
  console.error("Connection error:", err);
});
db.once("open", () => {
  console.log("Connected to the database");
});
// end of connection check

app.get("/", async function (req, res) {
  if (req.query.submit) {
    var n = req.query.n;
    var data = { party: n };
    var d = await user.find({ party: n });
    console.log(d);

    if (d.length > 0) {
      res.render("Home", { msg: n + " Already exists" });
    } else {
      var std = new user(data);
      var result = await std.save();
      res.render("Home", { msg: n + "  Add Successfully " });
    }
  } 
  else if(req.query.delparty){
    var n = req.query.n;
    var d = await user.find({party:n});
    if(d.length>0){
        var id = d[0]._id;
        await user.deleteOne({_id:id});
        res.render("Home",{msg: n + "Remove Successfully"});
    }
    else{
        res.render("Home", { msg: n + "no such a party exist" });

    }
  }
  else{
    if (req.query.Add){
        var vn = req.query.vn;
        var em = req.query.em;
        var pass = Math.floor(Math.random() * (9999 - 1000) + 1000);
        var vdata = {vname: vn, vemail: em, vpass:pass};
        var vd = await user1.find({vname:vn});
        if(vd.length>0){
            res.render("Home",{msg: vn+ "Already exists"});
        }
        else{
            var std = new user1(vdata);
            var result = await std.save();
            res.render("Home",{msg : vn + "Added Successfully"+"Password is"+pass});
        }
  }
  else if(req.query.Remove){
    var em = req.query.em;
    var vd = await user1.find({vemail:em});
    if(vd.length>0){
        var id = vd[0]._id;
        await user1.deleteOne({_id:id});
        res.render("Home",{msg:vn+"Removed Successfully"});
    }
    else{
        res.render("Home",{msg:vn+"No such voter"});
    }
  }
  else{
    res.render("Home",{msg:""})
  }
}});
app.listen(4000,()=>{
    console.log("Server running on port 4000");
});