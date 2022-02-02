const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate')
const jwt = require('jsonwebtoken');
require('../db/conn')


const User = require('../models/userSchema')

router.get('/', (req, res) => {
    res.send("Hello , this is soummya yup")
})


// router.post('/register',(req,res)=>{

// const { name, email,phone,work, password,cpassword} = req.body

// if(!name || !email || !phone || !work || !cpassword || !cpassword){
//     return res.status(422).json({error:"Please fill all the details"})
// }

// User.findOne({email:email})
// .then((userExist)=>{
//     if(userExist){
//         res.status(422).json({error:"Email already registered"})
//     }

//     const user = new User({name, email, phone, work, password, cpassword})
//     user.save().then(()=>{
//         res.status(201).json({message:"user register succesfully"})
//     }).catch((error)=>res.status(500).json({error:"Not succesfully registered"}))

// }).catch((error)=>res.status(500).json({error}))



// })


router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body

    if (!name || !email || !phone || !work || !cpassword || !cpassword) {
        return res.status(422).json({ error: "Please fill all the details" })
    }

    try {
        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: "Email already registered" })
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password not matching" })
        } else {

            const user = new User({ name, email, phone, work, password, cpassword })
            const userRegister = await user.save()

            if (userRegister) {
                return res.status(201).json({ message: "user register succesfully" })
            } else {
                return res.status(500).json({ error: "Not succesfully registered" })
            }

        }
    } catch (error) {
        console.error(error)
    }

})


//login//login

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ error: "Please filled all the details" })
        }


        const userLogin = await User.findOne({ email: email })

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)

            const token = await userLogin.generateAuthToken()
            console.log("Token is :" + token)

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 10000000),
                httpOnly: true,
                secure:true
            })


            if (!isMatch) {
                return res.status(400).json({ error: "User not login ,invalid credentials" })
            } else {
                return res.json({ message: "User login succesful" })
            }
        } else {
            return res.status(400).json({ error: "User not login , Invalid credentials" })
        }

    } catch (error) {
        console.error(error)
    }


})


router.get('/about',authenticate,(req,res)=>{
    console.log("This is about page")
    res.send(req.rootUser)
})



//get user data for contact page and home page//
router.get('/getdata',authenticate,(req,res)=>{
    res.send(req.rootUser)
})


router.post('/contact',authenticate,async(req,res)=>{
   try {
       
    const {name,email,phone,message} = req.body
    if(!name || !email || !phone || !message){
        return res.json({error:"Please filled the form correctly"})
    }
    
    const usercontact = await User.findOne({_id:req.userId})

    if(usercontact){
        const usermessage = await  usercontact.addMessage(name,email,phone,message)
        await usercontact.save()
        res.status(200).json({message:"user contact succesfully"})
    }


   } catch (error) {
       console.error(error)
   }
})


router.get('/logout',(req,res)=>{
    console.log("This is logout page")
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send('user logout')
})




module.exports = router;