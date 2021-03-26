var jwt=require('jwt-simple');
var User= require('../models/UserModel');
var bycrypt=require('bcrypt');
const {v4 : uuidv4}=require('uuid');

class AuthController{

    async login(req,res){
        try{
            let requestData=req.body;
            let data=await User.query().where('email',requestData.email).first();
            const password=await bycrypt.compareSync(requestData.password,data.password);
            return res.json({'status':200,'message':"Login successfull","data":module.exports.getToken(data)});
            
        }catch(err){
            console.log(err)
            return res.json(500,err);
        }
    }

    getToken(user){
        var expires=module.exports.expiresIn(7);
        var token =jwt.encode({
            exp:expires,
            id:user.id,
            client_key:uuidv4()
        },require('../config/secret')());

        return {
            token:token,
            expires:expires,
            user:user
        };
    }

    expiresIn(numDays){
        var dateObj=new Date();
        return dateObj.setDate(dateObj.getDate()+numDays);
    }
}

module.exports=new AuthController;