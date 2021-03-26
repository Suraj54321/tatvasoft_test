const express=require('express');
var path=require('path');
var app =express();
var bodyParser=require('body-parser');
var cors=require('cors');
var http = require('http');
var dotenv=require('dotenv');


express.application.prefix=express.Router.prefix=function(path,configure){
    var router=express.Router();
    this.use(path,router);
    configure(router);
    return router;
}

app.use(cors());

var server = http.createServer(app);

var db=require('./config/database');

app.use(bodyParser.json({
    limit:"2mb",
    extended:false
}))

app.use('/',require('./routes'));

app.set('port',3000);



server.listen(app.get('port'),function() {
    console.log('Application is running on 3000 port');
})