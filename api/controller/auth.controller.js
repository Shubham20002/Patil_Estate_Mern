const User=require('../models/user.model.js');
const {errorHandler}=require('../utils/error.js');
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');
module.exports.signup=async(req,res,next)=>{
   const {username,email,password}=req.body;
   const hasedpassword=bcryptjs.hashSync(password,10);
   const newUser=new User({username,email,password:hasedpassword});
   try {
    await newUser.save();
   res.status(200).json({
    message:'user created successfully'
   })
   } catch (error) {
    next(error);
   } 
}

module.exports.signin=async(req,res,next)=>{
   const {email,password}=req.body;
   try {
      const validUser=await User.findOne({email});
   if(!validUser){return next(errorHandler('404',"user not founcd"))}
   const validPassword=bcryptjs.compareSync(password, validUser.password);
   if(!validPassword){return next(errorHandler('401',"wrong id or password"))};
   const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET)
   const {password:pass,...rest}=validUser._doc
   res.cookie('access_tokan',token,{httpOnly:true}).status(200).json(rest);
   } catch (error) {
      next(error);
   }
   
}