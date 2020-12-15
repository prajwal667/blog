const express=require("express");
const bodyparser=require("body-parser");
const ejs=require("ejs");
const _ =require("lodash");
const homecontent="As artificial intelligence continues its rapid progress, equaling or surpassing human performance on benchmarks in an increasing range of tasks, researchers in the field are directing more effort to the interaction between humans and AI in domains where both are active. Chess stands as a model system for studying how people can collaborate with AI, or learn from AI, just as chess has served as a leading indicator of many central questions in AI throughout the field’s history AI-powered chess engines have consistently bested human players since 2005, and the chess world has undergone further shifts since then, such as the introduction of the heuristics-based Stockfish engine in 2008 and the deep reinforcement learning-based AlphaZero engine in 2017. The impact of this evolution has been monumental: chess is now seeing record numbers of people playing the game even as AI itself continues to get better at playing. These shifts have created a unique testbed for studying the interactions between humans and AI: formidable AI chess-playing ability combined with a large, growing human interest in the game has resulted in a wide variety of playing styles and player skill levels.There’s a lot of work out there that attempts to match AI chess play to varying human skill levels, but the result is often AI that makes decisions and plays moves differently than human players at that skill level. The goal for our research is to better bridge the gap between AI and human chess-playing abilities. The question for AI and its ability to learn is: can AI make the same fine-grained decisions that humans do at a specific skill level? This is a good starting point for aligning AI with human behavior in chess.\n PUBLICATION Aligning Superhuman AI with Human Behavior: Chess as a Model System PUBLICATION Learning Personalized Models of Human Behavior in Chess Our team of researchers at the University of Toronto, Microsoft Research, and Cornell University has begun investigating how to better match AI to different human skill levels and, beyond that, personalize an AI model to a specific player’s playing style. Our work comprises two papers, “Aligning Superhuman AI with Human Behavior: Chess as a Model System” and “Learning Personalized Behaviors of Human Behavior in Chess,” as well as a novel chess engine, called Maia, which is trained on games played by humans to more closely match human play. Our results show that, in fact, human decisions at different levels of skill can be predicted by AI, even at the individual level. This represents a step forward in modeling human decisions in chess, opening new possibilities for collaboration and learning between humans and AI.AlphaZero changed how AI played the game by practicing against itself with only knowledge of the rules (“self-play”), unlike previous models that relied heavily on libraries of moves and past games to inform training. Our model, Maia, is a customized version of Leela Chess Zero (an open-source implementation of AlphaZero). We trained Maia on human games with the goal of playing the most human-like moves, instead of being trained on self-play games with the goal of playing the optimal moves. In order to characterize human chess-playing at different skill levels, we developed a suite of nine Maias, one for each Elo rating between 1100 and 1900. (Elo ratings are a system for evaluating players’ relative skill in games like chess.) As you’ll see below, Maia matches human play m";
const contactcontent="Information technology is the study, design, development, implementation, support or management of computer-based information systems—particularly software applications and computer hardware. IT workers help ensure that computers work well for people</h1>";
const app=express();
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
let posts=[];
app.get("/",function(req,res){
res.render("home",{content:homecontent,posts:posts});
});
app.get("/about",function(req,res){
    res.render("about",)
});
app.get("/contact",function(req,res){
    res.render("contact")
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


app.listen(process.env.PORT || 3000,function() { console.log("our server is running on port 3000")
});
