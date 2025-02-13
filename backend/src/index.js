import server from "./app.js";
import connectDb from "./db/index.js";

import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});

// Start the server on port 3000
server.listen( 3000, () => {
    console.log("Server is running on port 3000");
});

connectDb()
.then(() => {
    console.log("Database connected successfully");
})
.catch((error) => {
    console.log("Database connection error: ", error);
});    


