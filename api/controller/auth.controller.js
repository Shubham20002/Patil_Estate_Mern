const User=require('../models/user.model.js');
const bcryptjs=require('bcryptjs');
module.exports.signup=async(req,res)=>{
   const {username,email,password}=req.body;
   const hasedpassword=bcryptjs.hashSync(password,10);
   const newUser=new User({username,email,password:hasedpassword});
   try {
    await newUser.save();
   res.status(200).json({
    message:'user created successfully'
   })
   } catch (error) {
    res.status(500).json(error.message);
   }
   
}