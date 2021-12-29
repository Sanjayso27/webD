const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// CRUD -Create Read Update Delete
// all middleware functions are called everytime a request with prefix  is made,
// const SanjayMiddleWare = (req,res,next)=> {
//     console.log(req);
//     next();
// }

//if declared above then both localhost as well as /index.html are used
// else only /index.html used
// static is express middleware function used to serve static objects of directory
app.use(express.static(path.join(__dirname,'public')));
// to use middleware functions you have to use app.use()
// app.use(SanjayMiddleWare);

app.get('/hello/:name', (req, res) => {
  res.send('Hello World!'+req.params.name);
})

app.get('/about', (req, res) => {
    // res.send('Hello World about!');
    // dynamically reading
    // res.sendFile(path.join(__dirname ,'index.html'));
    // internal server error 
    // res.status(500);
    res.json({"harry":34});
})
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})