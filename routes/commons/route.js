var express= require('express');

var app=express();

var auth=require('./auth');
var blog=require('./blog');

console.log(auth);

app.prefix('/auth',function(router){
    router.use('/',auth);
});

app.prefix('/blog',function(router){
    router.use('/',blog);
});

module.exports=app;