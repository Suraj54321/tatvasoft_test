var jwt=require('jwt-simple');
var Blog= require('../models/Blog');
var bycrypt=require('bcrypt');
const {v4 : uuidv4}=require('uuid');

class BlogController{

    async createBlog(req,res){
        try{
            const requestData=req.body;
            
            let data=await Blog.query().insert({
                'title': requestData.title,
                'Description': requestData.Description,
                'publish_date': requestData.publish_date,
                'status': requestData.status,
                'category': requestData.category,
                'modify_date':Date.now()
                });
            console.log(data);
        }catch(err){
            console.log(err);
            return res.json({'status':500,'message':err});
        }
    }

    
}

module.exports=new BlogController;