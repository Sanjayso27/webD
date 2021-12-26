const http=require('http');
const FileSystem=require('fs');

const host='127.0.0.1';
const port=3000;
const home=FileSystem.readFileSync('./index.html');
const about=FileSystem.readFileSync('./about.html');
const contact=FileSystem.readFileSync('./contact.html');
const services=FileSystem.readFileSync('./services.html');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    let url=req.url;
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    if(url=='/'){
        res.end(home);
    }
    else if(url=='/about'){
        res.end(about);
    }
    else if(url=='/contact'){
        res.end(contact);
    }
    else if(url=='/services'){
        res.end(services);
    }
    else {
        res.statusCode=404;
        res.end('<h1>404! not found</h1>');
    }
});

server.listen(port,host,()=>{
    console.log('Listening');
});
