// handle routing (if-else) 

const express=require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("this is my firt express app");
});

app.get("/about",(req,res)=>{
    res.send("this is my about page of firt express app");
});

app.post("/about",(req,res)=>{
    res.send("this is my about page of firt express app");
});

app.post("/this",(req,res)=>{
    res.status(404).send("this page is not found");
});

app.listen(3000,()=>{
    console.log("success!");
});