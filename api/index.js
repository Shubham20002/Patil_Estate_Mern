const express=require('express');
const mongoose=require('mongoose');
const userrouter=require('../api/routes/user.route.js');
const authrouter=require('./routes/auth.route.js');
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

app.use(express.json());
app.use(express.urlencoded());
app.listen(4000,(err)=>{
    console.log('server runing on port:4000');
});

app.use('/api/user',userrouter);
app.use('/api/auth',authrouter);