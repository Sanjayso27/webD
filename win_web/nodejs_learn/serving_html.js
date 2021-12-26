const http=require('http');
const FileSystem=require('fs');
const content =FileSystem.readFileSync('flexbox.html');

const server=http.createServer((req,resp)=>{
    // res.writeHead(200,{'Content-type':'text/html'});
    // or 
    // resp.statusCode=200;
    // resp.setHeader('Content-type','text/html');
    // resp.end(content);
});
// 80 port is not accessible for me(??)
// 127.0.0.1 is the local host
server.listen(3000,"127.0.0.1",()=>{
    console.log("server is running");
});