var jwt = require('jwt-simple');

const v = require('node-input-validator');

var User=require('../models/UserModel');

module.exports=async function(req,res,next){
    if(req.headers['token'].length == 0){
        return res.json({"status":500,"message":"Token expired","data":[]});
    }

    var token=req.headers['token'];

    try{
        var decoded=jwt.decode(token,require('../config/secret')());
        
        if(decoded.exp<=Date.now()){
            return res.json({"status":500,"message":"Token expired","data":[]});
        }
            
            req.session.user_id=decoded.id;
            next();
    
    }catch(err){
        next()
        return res.json({"status":500,"message":"Unauthorize access","data":[]});
    }
}