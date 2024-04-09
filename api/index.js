const express=require('express');
const mongoose=require('mongoose');
const userrouter=require('../api/routes/user.route.js');
const authrouter=require('./routes/auth.route.js');
const dotenv=require('dotenv');
dotenv.config();

const cors=require('cors');
const app=express();
app.use(cors());
//connection to mongodb database
mongoose.connect(process.env.MONGO).then(()=>
{
    console.log('connected to db');
}
).catch((err)=>{
console.log('error');
});

app.use(express.json());
app.use(express.urlencoded());
app.listen(4000,(err)=>{
    console.log('server runing on port:4000');
});

app.use('/api/user',userrouter);
app.use('/api/auth',authrouter);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'internal server error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
});