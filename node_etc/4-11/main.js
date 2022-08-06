
var http = require('http');
var fs = require('fs');
const hostname = '127.0.0.1';
const port = '3000';

var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
});

const server = http.createServer((req,res)=>{
  req.statusCode=200;
  req.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
})

app.listen(3000);

server.listen(port, hostname, ()=>{
  console.log('Server running at http http://${hostname}:${port}/');
});