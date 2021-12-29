const express = require("express");
const path = require("path");
const app = express();
const { engine } = require('express-handlebars');
const port = 3000;

//handlebars middleware
app.engine('handlebars', engine({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/',(req,res)=>res.render('index'));

// body parser middleware
// handle json and urlencoded data 
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//if declared above then both localhost as well as /index.html are used
// else only /index.html used
// static is express middleware function used to serve static objects of directory
app.use(express.static(path.join(__dirname, "static")));
app.use("/", require(path.join(__dirname, "router/blog.js")));
// to use middleware functions you have to use app.use()
// app.use(SanjayMiddleWare);

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});
