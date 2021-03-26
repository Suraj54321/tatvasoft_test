var express=require('express');

var router=express.Router();

var BlogController = require('../../controllers/blogController');
var authCheck=require('../../middleware/validationRequest');

router.post('/create',authCheck,BlogController.createBlog);

module.exports=router;