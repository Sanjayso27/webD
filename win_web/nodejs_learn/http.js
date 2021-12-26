const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write('Hello');
        res.end();
    }
    if(req.url=='/about'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

// not standard way
server.listen(3000);
// // everytime there is a request there is a event ,we can use on function to listen to it

// // listener
// server.on('connection', (socket)=>{
//     console.log('New connection');
// });

console.log('on port 3000');