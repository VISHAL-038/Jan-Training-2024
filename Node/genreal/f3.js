var http=require('http')
const server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'})//200 for found,this statement will execute it
    res.write('<center><h1>My Home Page</h1></center>')
    res.write("<p>20+10</p>")
    var a=10;
    var b=20;
    var c=a+b;
    res.write("a + b =" +c)

})
server.listen(() => {
//  res.write("hello") 
 console.log(server.address().port)
}

)//it is for server local host port