// synchronous or blocking
// line by line execution guaranteed

// asynchronous or non-blocking
// line by line execution not guaranteed
// callbacks will fire

const fs=require("fs");
// async so the program will proceed forward and when this read completes callback will be fired
let text=fs.readFile("win_web/read.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("message");