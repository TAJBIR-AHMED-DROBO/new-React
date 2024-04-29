const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
mongoose
  .connect("mongodb://localhost/mern-series")
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => {
    console.log("There is an error here");
  });


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        required:true,
    },
})

userSchema.methods.generateToken = function(){
   const token = jwt.sign({
    id:this._id.toString(),
    email:this.email,
    isAdmin:this.isAdmin
   },"tajbirthegreat",{
    expiresIn:"50d"
   })
   return token
}


const User =  mongoose.model("User",userSchema);

module.exports = {User};