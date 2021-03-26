var express=require('express');

var app=express();

app.prefix('/tatva',function(router){
    var v=require('./commons/auth');
    router.use('/',v);
});

app.prefix('/tatva/blog',function(router){
    var v1=require('./commons/blog');
    router.use('/',v1);
});

app.use(function(req,res,next){
    var err= new Error('Resource not found');
    console.log(err);
    err.status=404;
    var resources={};
    res.status(404);
    resources.status=err.status;
    resources.messages=err.messages;

    return res.json(resources);
})

module.exports=app;