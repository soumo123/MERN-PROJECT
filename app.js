const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser())

dotenv.config({path:'./config.env'})
require('./db/conn')
app.use(express.json())

app.use(require('./router/auth'))
// const User = require('./models/userSchema')
const PORT = process.env.PORT




app.get('/',(req,res)=>{
    res.send("Hello , this is soummya")
})

// app.get('/about',middleware,(req,res)=>{
//     res.send("Hello , this is about page")
// })


// app.get('/contact',(req,res)=>{
//     res.send("Hello , this is contact")
// })


app.get('/login',(req,res)=>{
    res.send("Hello , this is login page")
})


app.listen(PORT,()=>{
    console.log("Server is running at 5000")
})