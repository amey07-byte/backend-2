import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema({

username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true,

},
email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,

},
fullname:{
    type:String,
    required:true,
    trim:true,
    index:true,

},
avatar:{
    type:String,        
    required:true,

},
coverimage:{
type:String
},
watchHistory:[
{
    type:mongoose.Schema.Types.ObjectId,
    ref:"video"

}
],
password:{
    type:String,
    required:[true,"Password is required!!!"]
},
refreshToken:{
    type: String
}


},{timestamps:true});



//password encryption 
userSchema.pre("save", async function(next){

if(!this.isModified("password")) return next();
this.password = bcrypt.hash(this.password , 10)
next();
});


//check password is coorect or not 
userSchema.method.isPasswordCorrect = async function( password ){
    
    return await  bcrypt.compare(password,this.password);

}




export const User = mongoose.model("User",userSchema);