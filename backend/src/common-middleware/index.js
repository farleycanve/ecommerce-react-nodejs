const jwt=require('jsonwebtoken');





exports.requireSignin=(req,res,next)=>{
    if(req.headers.authorization){
        const token=req.headers.authorization.split(" ")[1];
        const user=jwt.verify(token,process.env.JWT_SECRET);
        req.user=user;  
    }
    else{
        res.status(400).json({message:'Authorization required'})
    }
    next();

}
exports.userMiddleWare=(req,res,next)=>{
    if(req.user.role !== 'user'){
        return res.status(400).json({message: 'User denied'});
    }
    next();
}
exports.adminMiddleWare=(req,res,next)=>{
    if(req.user.role !== 'admin'){
        return res.status(400).json({message: 'Access denied'});
    }
    next();
}