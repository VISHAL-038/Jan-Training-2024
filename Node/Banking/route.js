var express = require("express");
var app = express();
app.set("view engine", "ejs");
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});
con.connect();
app.get("/",function(req,res){
    res.render("home")
})
app.get("/create", function (req, res) {
    if (req.query.submit) {
      var ac = "SBI101";
      var p = req.query.p;
      var n = req.query.n;
      var fn = req.query.fn;
      var e = req.query.e;
      var ph = req.query.ph;
      var g = req.query.g;
      var c = req.query.c;
      var s = req.query.s;
      var ct = req.query.ct;
      var am = req.query.am;
    con.query("select * from account", function (err, result) {
      if (!err) {
        if (result.length > 0) {
          ac = "SBI"+(result.length+101);
        } else ac = "SBI01";
        con.query(
          `insert into account values('${ac}','${p}','${n}','${fn}','${e}','${ph}','${g}','${c}','${s}','${ct}','${am}')`,
          function (err, result) {
            if (!err) {
              res.render("create", {
                msg: "account created successfully with account number" + ac,
              });
            } else res.send("error");
          }
        );
      } else res.send("err" + err);
    });
    }
    else
    res.render('create',{msg:""});
})
app.get("/deposit", function(req, res) {
    if (req.query.submit) {
        var ac = req.query.ac;
        var p = req.query.p;
        var am = parseInt(req.query.am);
        
        con.query("SELECT * FROM account WHERE ac='" + ac + "' and p='" + p + "'", function(err, result) {
            if (!err) {
                if (result.length > 0) {
                    var camt = parseInt(result[0].am);
                    if (camt >= am) {
                        camt = camt + am;
                        con.query(`UPDATE account SET am='${camt}' WHERE ac='${ac}'`, function(err, result) {
                            if (!err) {
                                // Removed the transaction insertion code
                                res.render("deposit", {msg: "after deposit " + am + " Your current balance is= " + camt});
                            } else {
                                res.send("Error in code " + err);
                            }
                        });
                    } 
                } else {
                    res.render("deposit", {msg: "Invalid username or password"});
                }
            } else {
                res.send("Error in code " + err);
            }
        });
    } else {
        res.render('deposit', {msg: ""});
    }
})
app.get("/withdraw", function(req, res) {
    if (req.query.submit) {
        var ac = req.query.ac;
        var p = req.query.p;
        var am = parseInt(req.query.am);
        
        con.query("SELECT * FROM account WHERE ac='" + ac + "' and p='" + p + "'", function(err, result) {
            if (!err) {
                if (result.length > 0) {
                    var camt = parseInt(result[0].am);
                    if (camt >= am) {
                        camt = camt - am;
                        con.query(`UPDATE account SET am='${camt}' WHERE ac='${ac}'`, function(err, result) {
                            if (!err) {
                                // Removed the transaction insertion code
                                res.render("withdraw", {msg: "after withdrawal" + am + " Your current balance is= " + camt});
                            } else {
                                res.send("Error in code " + err);
                            }
                        });
                    } 
                } else {
                    res.render("withdraw", {msg: "Invalid username or password"});
                }
            } else {
                res.send("Error in code " + err);
            }
        });
    } else {
        res.render('withdraw', {msg: ""});
    }
}).listen(5000)

