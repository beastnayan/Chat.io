import express from "express";
import { createServer } from "http";
import cors from "cors";
// Create the HTTP server with Express
import router from "./routes/send-otp.routes.js";

const app = express();
const server = createServer(app);   
app.use(express.json()); // Enable JSON parsing
app.use(cors({ origin: "*", credentials: true })); // Allow frontend requests
app.use("/api/v1/otp", router);




app.get("/", (req, res) => {
    res.send("Server is running on port 3000");
});




export default server;
