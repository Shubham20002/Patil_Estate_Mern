const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

const app=express();
//connection to mongodb database
mongoose.connect(process.env.MONGO).then(()=>
{
    console.log('connected to db');
}
).catch((err)=>{
console.log('error');
});


app.listen(4000,(err)=>{
    console.log('server runing on port:4000');
})