import mongoose , {Schema} from "mongoose";

const OTPSchema = new Schema(
    {

        OTP:{
            type:String,
            required:true,

        },

        phonenumber :{
            type:String,
            required:true,
        },

        createdAt:{
            type:Date,
            default:Date.now,
            expires : 300
        }
    },
    {timestamp:true}
)



export  const  OTPModel = mongoose.model("OTP" , OTPSchema)