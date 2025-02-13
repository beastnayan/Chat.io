import User from '../models/user.model.js';
import { OTPModel } from '../models/auth/otp.models.js';


function generateOTP(){
        
    return  Math.floor(100000 + Math.random()*900000).toString()
        
}


const sendOtpToUser = async (req,res) => {

    const {phonenumber} = req.body;
    const user = await User.findOne({phonenumber})

    if(!user){
        return res.status(400).json({
            message:"User not found"
        })
    }

    const generateOtp = generateOTP()

    await OTPModel.create({phonenumber, otp : generateOtp})
     
    return res.status(200).json(
        {
            message : "OTP send Sucessfull , Valid fro 1min ",
            otp : generateOtp
        }
    )



}

const verifyOtp = async (req,res) => {

   try {
        const {phonenumber,otp} = req.body;
        const verifyUserBasedOnOtp = await OTPModel.findOne({phonenumber,otp})

        if(!verifyUserBasedOnOtp){
            return res.status(400).json({
                message:"Invalid OTP"
            })
        }

        const userlogin = await User.findOne({phonenumber})
        const accessToken = userlogin.generateAcessTokens()


        res.status(200).json({
            message: "Login successful",
            accessToken,
            userlogin,
        });
   } catch (error) {
        res.status(400).json({
            message: "Invalid otp or expired otp",
            
        });
   }
        
}




// const sendOtpToUser = async (req, res) => {

//   try {
//     const { phonenumber } = req.body;

//     const user = await User.findOne({phonenumber})

//     if(!user){
//         return res.status(400).json({
//             message:"User not found"
//         })
//     }

//     const generateduserotp = otp.generateOtp()
//     await otp.create({phonenumber, otpmodel : generateduserotp})
 
//     return res.status(200).json({message : "OTP send Sucessfull"})

//   } 
//   catch (error) {
//     return res.status(400).json({message : "seeeerver eror"})
//   }

// }

// const verifyOtpFromUser = async (req,res) =>{
//    try {
    
//         const {phonenumber,otp} = req.body

//         const verifyotp = User.findOne({phonenumber,otp})

        

//         if(!verifyotp){
//             return res.status(400).json(
//                 {
//                     message:"Invalid and Expired otp"
//                 }
//             )
//         }

//         const user  = User.findOne({phonenumber})

//         refreshtoken = user.generateRefershTokens()
//         res.status(200).json({
//             message: "Login successful",
//             accessToken,
//             user,
//         });



//     } catch (error) {
//         return res.status(400).json(
//             {
//                 message:"Server Error"
//             }
//         )
//     }


// }