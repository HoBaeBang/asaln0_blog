const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('incoming...');
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Academy</title></head>');
        res.write('<body><h1>Welcome!</h1></body>');
        res.write('</html>');
        res.write("Hello");
    }else if (url === '/courses') {
        res.write('Courses');
    } else {
        res.setHeader('Content-Type', 'text/html;charset=UTF-8)');
        res.write('<html>');
        res.write('<head><title>Academy</title></head>');
        res.write('<body><h1>Not Found!</h1></body>');
        res.write('</html>');
        res.write("Not Found");
    }
    res.end();
});

server.listen(8080);