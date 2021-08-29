const express=require('express');
const { requireSignin, adminMiddleWare } = require('../common-middleware');
const { addItemToCart, getCartItems } = require('../controller/cart');
const router=express.Router();


router.post('/cart/additem',requireSignin,adminMiddleWare, addItemToCart)
router.get('/cart/getItem', requireSignin,adminMiddleWare,getCartItems)
module.exports=router;