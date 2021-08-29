const express=require('express');
const router=express.Router();
const {signup,signin}=require('../../controller/admin/auth');
const { isRequestValidated, validateRegisterUser, validateLogin } = require('../validators/auth');

router.post('/admin/signin',validateLogin,isRequestValidated,signin)
router.post('/admin/signup',validateRegisterUser,isRequestValidated,signup)
// router.post('/profile',requireSignin,(req,res,next)=>{
//     res.status(200).json({user:'profile'})
// })
module.exports =router;