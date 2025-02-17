import express from "express";
// const { sendOtpToUser } = require("../controllers/authController");
import { sendOtpToUser } from "../controllers/otp.controllers.js";

const router =express.Router();

// router.post("/api/v1/otp", (req, res) => {
//     console.log("Send OTP route hit");
    
//     // Call the function to send OTP
//     sendOtpToUser(req, res);
//   });

router.route("/otp").post(sendOtpToUser);

export default router;
