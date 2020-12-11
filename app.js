const express=require("express");
const bodyparser=require("body-parser");
const ejs=require("ejs");
const _ =require("lodash");
const homecontent="JavaScript is the world's most popular programming language  JavaScript is the programming language of the Web.JavaScript is easy to learn.This tutorial will teach you JavaScript from basic to advanced";
const aboutcontent="Technology is the sum of techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation."
const contactcontent="Information technology is the study, design, development, implementation, support or management of computer-based information systems—particularly software applications and computer hardware. IT workers help ensure that computers work well for people";
const app=express();
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
let posts=[];
app.get("/",function(req,res){
res.render("home",{content:homecontent,posts:posts});
});
app.get("/about",function(req,res){
    res.render("about",{content:aboutcontent})
});
app.get("/contact",function(req,res){
    res.render("contact",{content:contactcontent})
});
app.get("/compose",function(req,res){
    res.render("compose")
});
app.post("/compose",function(req,res){
   var post={title:req.body.value1,
    msg:req.body.value2
}
posts.push(post);
   res.redirect("/")
});
app.get("/posts/:searches", function(req,res){
    const searching =_.lowerCase(req.params.searches);
posts.forEach(function(post){
const postName =_.lowerCase(post.title);

if(searching === postName)
{
res.render("post", {
    val: post.title,
    vals: post.msg
});
}

});
});


app.listen(3000,function() { console.log("our server is running on port 3000")
});
