import { User } from '../models/user.models.js';  
import { OTPModel } from '../models/otp.models.js';  
import  generateOTP  from '../utils/generateOtp.js';  

const sendOtpToUser = async (req, res) => {
    try {
        console.log("Received request body:", req.body);
        const { phonenumber } = req.body;

        // const user = await User.findOne({ phonenumber });

        // if (!user) {
        //     return res.status(400).json({
        //         message: "User not found",
        //     });
        // }

        const generatedOtp = generateOTP();

        await OTPModel.create({ phonenumber, otp: generatedOtp });

        return res.status(200).json({
            message: "OTP sent successfully, valid for 1 minute",
            otp: generatedOtp, // Remove in production for security reasons
        });

    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).json({ message: "Internal Server Error", error });
    }
};

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

export { sendOtpToUser, verifyOtp };
