const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    name :{
        type:String, 
        required:true
    },
    email :{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        default : Date.now
    },

    messages:[
        {
            name :{
                type:String, 
                required:true
            },
            email :{
                type:String,
                require:true,
            },
            phone:{
                type:Number,
                required:true,
            },
            message:{
                type:String,
                required:true
            },
        }
    ],
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})




//password hash///

userSchema.pre("save", async function(next){

    if(this.isModified("password")){
        // console.log(`the current password is ${this.password}`)
        this.password = await bcrypt.hash(this.password,10)
        // console.log(`the current password is ${this.password}`)
        this.cpassword = await bcrypt.hash(this.password,10)
    }
    next();
})

//token generate////////////////////////////////
userSchema.methods.generateAuthToken = async function(){
    try {
        console.log(this._id)
        const token = jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token;
        
    } catch (error) {
        res.send("The error part"+error)
        console.log("The error part"+error)
    }
}



//store the messages//
userSchema.methods.addMessage = async function(name,email,phone,message){


    try {
        this.messages = await this.messages.concat({name,email,phone,message})
        await this.save()
        return this.messages
    } catch (error) {
        console.log(error)
    }
}




const User =  mongoose.model("User",userSchema)

module.exports = User