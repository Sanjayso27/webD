const express = require('express');
const path = require ('path');
const router = express.Router();
const blogs =require ('../data/blogs');

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/index.html'));
});

// find all blogs
router.get('/blog',(req,res)=>{
    // res.json(blogs)
    res.sendFile(path.join(__dirname,'../templates/bloghome.html'));
});

// : denotes that it slug is param no need for : in the url
// find a single blog with given slug
router.get('/blogpost/:slug',(req,res)=>{
    // req.query for query for getting the query string in the request starts with ? in the request
    let myBlog = blogs.filter(e =>{
        return e.slug === req.params.slug
    })
    console.log(myBlog);
    res.sendFile(path.join(__dirname,'../templates/blogpage.html'));
})

// create member generally post requests
// we generally pass data as json in case of post request
// so to parse it we should use expressparser(middlewares)
router.post('/',(req,res)=> {
    // res.send(req.body);
    const newMember = {
        title : `How to get started with ${req.body.learn}`,
        content: `${req.body.learn}`,
        slug: `${req.body.learn}-learn`
    }
    // console.log(req.body.learn);
    if(!req.body.learn){
        res.status(404).json({msg: "please specify what to learn"});
    }
    else {
        blogs.push(newMember);
        res.json(blogs);
    }
})

//update member
router.put('/blogpost/:slug',(req,res)=>{
    let found = blogs.some(e =>{
        return e.slug == req.params.slug
    })
    if(found){
        const updMem = req.body;
        blogs.forEach(e => {
            if(req.params.slug == e.slug){
                e.title = `How to get started with ${updMem.learn}`;
                e.content= `${updMem.learn}`;
                e.slug= `${updMem.learn}-learn`;
                res.json({msg: "member updated",e});
            }
        })
    }
    else {
        res.status(404).json({msg: "provide slug name"});
    }
})

// delete member
router.delete('/blogpost/:slug',(req,res)=>{
    let found = blogs.some(e =>{
        return e.slug == req.params.slug
    })
    if(found){
        let myBlog = blogs.filter(e =>{
            return e.slug != req.params.slug
        })
        res.json({msg: 'blog deleted',myBlog});
    }
    else{
        res.status(404).json({msg: "provide slug name"});
    }
})

module.exports = router;