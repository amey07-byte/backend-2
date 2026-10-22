import {asyncHandler} from "../utils/asyncHandler.js"
//higher order function asyncHandeler
const registerUser=asyncHandler(async(req,res)=>{
    res.status(200).json({
        message:"User is Created "
    })
})

export {registerUser}

