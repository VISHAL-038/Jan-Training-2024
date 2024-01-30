var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "",
    database:"mydb"
});

con.connect()
// con.query("insert into  t2 (name,course) values ('a','mca')",function(err,result){
//     if(!err){
//         con.query("select * from t2",function(err,result){
//             if(!err){
//                 result.forEach(row => {
//                     console.log(row);
//                 });
//             }
//             else
//             console.log("error"+err);
//         });
//     }
//     else
//     console.log("error"+err);
// })

con.query("delete from t2 where name = 'a'",function(err,result){
    if(!err){
        console.log("data deleted");
    }
    else
    console.log("error"+err);
})
