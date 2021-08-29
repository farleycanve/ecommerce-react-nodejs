const express=require('express');
const { requireSignin, adminMiddleWare } = require('../common-middleware');
const { addCategory, getCategory } = require('../controller/category');
const router=express.Router();


router.post('/category/create',requireSignin,adminMiddleWare, addCategory)
router.get('/category/getcategory', getCategory)
module.exports=router;