var express = require('express');
var cors = require('cors');
var app = express();
const jwt = require('jsonwebtoken');
const winston = require('winston');
const mongoose = require("mongoose");
const config = require('config');
const joi = require('joi');

const helmet = require('helmet');

const morgan = require('morgan');

let User = require('./models/user');

let Blog = require('./models/blog');

let Comment = require('./models/comment');

let currentId;


app.use(helmet());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

winston.add(winston.transports.File, {filename: "./log/logfile.log"});

mongoose.connect(config.get("db.conn_str"), {useNewUrlParser: true}, (err) => {
    if(!err){
        winston.log('info', 'Database connected');
    }
    else{
        winston.log('error', 'Database cannot connected');
    }
});

//console.log(config.get("db.conn_str"))
//config.get("db.conn_str")

app.post('/authenticate', (req, res) => {

  User.findOne({username: req.body.username}, function(err, user){

    if(err){

      
      res.status(403).send({
        isLoggedIn : false,
        err : "Invalid details"
      });

    }
    else{
      if(user == null){

        res.send({
          isLoggedIn : false,
          err : "No account"
        });

      }
      else{

        if(req.body.password == user.password){

         // console.log(user);
          currentId = user._id;
          //console.log(currentId);

          var token = jwt.sign({
            username: req.body.username,
            org: "UI"
          }, "mia-secret-key", {expiresIn: "1h"});
      
          res.send({
            isLoggedIn : true,
            token : token
          });
  
        }else{
          res.send({
            isLoggedIn : false,
            err : "Wrong Password"
          });
        }


      }
      

    }
    

    
  });

   });




process.on("uncaughtException", (err) => {
    winston.log("error", err.message);
});

// process.on("unhandledRejection", (err)=> {
//     winston.log(err)
// });


//throw new Error("App crashed");



app.post('/register', function(req, res){

 
  User.findOne({username: req.body.username}, function(err, user){

    if(err){

      console.log(err);

    }
    else{
      if(user == null){

        User.create(req.body, function(err, newCreate){
          if(err){
            
          }
          else{
            res.send({
              success : true
            })
          }
        });

      }
      else{

        res.send({
          success : false,
          msg: "The email was taken already"
        })
        
      }
    }

  });
  
});


app.use((req, res, next) => {

  var token = req.headers.authtoken || req.body.authtoken || req.params.authtoken;
  jwt.verify(token, "mia-secret-key", function(err, decoded){
    if(err){
      res.status(403).send({
        err: "Invalid details",
        isLoggedIn : false
      })
    }
    else{
      req.decoded = decoded;
      next();
    }

  });

});

app.get('/blogs', function(req, res){

  Blog.find({}, function(err, blogs){

    if(err){
      winston.log('err', err);
    }
    else{
      console.log("get all blogs")
      console.log(Array.isArray(blogs));

      // blogs.map(function(item,index){
      //   if(item.author._id == )
      // });
      let result = [];
      for(let i = 0; i < blogs.length; i++){
        if(blogs[i].author.id == currentId){

          blogs[i].ifModify = true;
        }
        else{
          blogs[i].ifModify = false;
        }
      }
      
      console.log('---------')
      console.log(blogs);
      
      res.send({
        success: true,
        data: blogs
      });
    }
    
  });
  
});

app.post("/newblog", function(req, res){


  let token = req.headers.authtoken;
  let decoded = jwt.verify(token, 'mia-secret-key');
  User.findOne({username: decoded.username}, function(err, user){

    if(err){
      winston.log("error", err);
    }
    else{
      //console.log(user);
      Blog.create({title: req.body.title, content: req.body.content, author: {id: user._id, name: user.firstname + " " + user.lastname}}, function(err, newBlog){

        res.send({
          success: true
        })
        
      });
      
    }
  });
 
});

//--use for like blog
app.post("/like", function(req, res){

  let token = req.headers.authtoken;
  let decoded = jwt.verify(token, 'mia-secret-key');

  User.findOne({username: decoded.username}, function(err, user){

    let newLike = {id: user._id, name: user.firstname + " "+ user.lastname};



    Blog.findById(req.body.blogId, function(err, blog){

      if(err){
        winston.log("err", err)
      }
      else{
        if(blog.like.includes(newLike)){
          res.send({
            success: false,
            msg: "already liked"
          })
        }
        else{

          Blog.findByIdAndUpdate(req.body.blogId,{$push: {like: newLike}}, function(err, update){

            res.send({
              success : true
            })

          })

          

        }
        
      }

    });


  });
    

  
  //console.log(req.body);
  //console.log(decoded);

});

//--edit blog

app.post("/edit", function(req, res){

  console.log(req.body);

});

//---Use for delete Blog
app.post("/delete", function(req, res){

  Blog.findByIdAndRemove(req.body.blogId, function(err){
    if(err){
      winston.log("err", err)

    }
    else{
      res.send({
        success : true
      })
    }
  })

});

//----newcomment
app.post('/newcomment', function(req, res){
  let token = req.headers.authtoken;
  let decoded = jwt.verify(token, 'mia-secret-key');
  let newComment = {author: decoded.username, content: req.body.comment.content};
  Blog.findById(req.body.blogId,function(err, blog){
    if(err){
      winston.log("error", err);
    }
    else{
      Comment.create(newComment, function(err, comment){

        if(err){
          winston.log("err", err);
        }
        else{

          comment.content = req.body.comment.content;
          comment.author = decoded.username;
          comment.save();
          blog.comments.push(comment);
          blog.save();
          res.send({success: true});

        }
      });
      
    }
  });

});

//--------get comments
app.post("/comments", function(req, res){

  //console.log(req.body.blds);
  //console.log(req.params);
  Comment.find({'_id': {$in: req.body.blds}}, function(err, comments){
    if(err){
      winston.log("err", err);
    }
    else{

      //console.log(comments);
      res.send({
        success: true,
        data: comments
      });
    }
  });

});

app.listen(8080, function(){

    console.log("Accesment is running on 8080");
})