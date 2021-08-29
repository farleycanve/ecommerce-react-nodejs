const express=require('express');
const router=express.Router();
const {signup,signin}=require('../controller/auth');
const { isRequestValidated, validateRegisterUser, validateLogin } = require('./validators/auth');
const {requireSignin} =require('../common-middleware/index');

router.post('/signin',validateLogin,isRequestValidated,signin)
router.post('/signup',validateRegisterUser,isRequestValidated,signup)
router.post('/profile',requireSignin,(req,res,next)=>{
    res.status(200).json({user:'profile'})
})
module.exports =router;