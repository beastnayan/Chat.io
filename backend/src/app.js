

import express from "express";
const app = express();

import { createServer } from "http";
import { Server } from "socket.io";






// Create the HTTP server with Express
const server = createServer(app);

// Initialize Socket.IO with the server
const io = new Server(server);

// Listen for incoming connections on Socket.IO
io.on("connection", (socket) => {
    console.log("socket is connected: " , socket);

    socket.on("chat", (payload) => {
        console.log(" A user connected: " ,  payload);
    });
});


export default server;
