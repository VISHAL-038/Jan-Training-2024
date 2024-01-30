var http=require('http')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'})//200 for found,this statement will execute it
    res.write('<center><h1>My Home Page</h1></center>')
    var a=10;
    var b=20;
    var c=a+b;
    var d=a-b;
    var e=a/b;
    var f=a*b;
    res.write("<center><table border=1 cellspacing=10 cellpadding=10>")
    res.write(`<tr><td>${a}</td>=<td>${b}</td><td>=</td><td>${c}</td></tr>`)


}).listen(5000)