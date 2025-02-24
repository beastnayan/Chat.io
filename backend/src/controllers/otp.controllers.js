import { User } from '../models/user.models.js';  
import { OTPModel } from '../models/otp.models.js';  
import  generateOTP  from '../utils/generateOtp.js';  

const sendOtpToUser = async (req, res) => {
    try {
        const { phonenumber } = req.query;
        console.log("Extracted phonenumber:", phonenumber); // Check extracted value

       if(!phonenumber){
           return res.status(400).json({message:"Please provide a valid phone number"})
        }

        // const user = await User.findOne({ phonenumber });

        // if (!user) {
        //     return res.status(400).json({
        //         message: "User not found",
        //     });
        // }

        const generatedOtp = generateOTP();
        console.log("Generated OTP:", generatedOtp); // Check generated OTP

        await OTPModel.create({ phonenumber, OTP: generatedOtp });

        return res.status(200).json({
            message: "OTP sent successfully, valid for 1 minute",
             otp: generatedOtp, // Remove in production for security reasons
        });

    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const resendOtp = async (req, res) => { 

  try {

    const { phonenumber } = req.query;
    console.log("Extracted phonenumber for resend otp:", phonenumber); // Check extracted value
    if(!phonenumber){
        return res.status(400).json({message:"Please ppprovide a valid phone number"})
    }

    // new otp 
    const newOtp = generateOTP();
    console.log("New OTP:", newOtp); // Check generated OTP

    // update otp in database   
    const newOtpEntry = await OTPModel.findOneAndUpdate(
        {
            phonenumber
        },
        {
            $set: {
                otp: newOtp
            }
        }
    )

    res.status(200).json({
        message: "OTP sent successfully, valid for 1 minute",
        otp: newOtp, // Remove in production for security reasons
    });

  } catch (error) {

     console.error("Error generating OTP:", error);
     res.status(500).json({ message: "Internal Server Error" });
  }
}

const verifyOtp = async (req, res) => {
    try {
        const { phonenumber, otp } = req.body;

        const verifyUserBasedOnOtp = await OTPModel.findOne({ phonenumber, otp });

        if (!verifyUserBasedOnOtp) {
            return res.status(400).json({
                message: "Invalid OTP",
            });
        }

        const userlogin = await User.findOne({ phonenumber });

        if (!userlogin) {
            return res.status(400).json({
                message: "User not found",
            });
        }

        const accessToken = userlogin.generateAccessTokens(); // Ensure this function exists

        return res.status(200).json({
            message: "Login successful",
            accessToken,
            user: userlogin,
        });

    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).json({
            message: "Internal Server Error",
            error,
        });
    }
};

export { sendOtpToUser, verifyOtp , resendOtp };
