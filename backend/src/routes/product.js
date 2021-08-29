const express=require('express');
const { requireSignin, adminMiddleWare } = require('../common-middleware');
const { createProduct } = require('../controller/product');
const router=express.Router();
const { nanoid } = require('nanoid')
const multer=require('multer');
const path=require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'));
    },
    filename: function (req, file, cb) {
      cb(null, nanoid() + '-' + file.originalname)
    }
  })
const upload=multer({storage})
router.post('/product/create',requireSignin,adminMiddleWare,upload.array('productPicture'),createProduct)
//router.get('/product/getproduct', getCategory)
module.exports=router;