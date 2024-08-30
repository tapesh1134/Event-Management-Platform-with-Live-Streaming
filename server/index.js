const express = require("express");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");

const app = express();
const port = 8000; // Port for Express server
const ioPort = 8001; // Port for Socket.IO server

// Middleware
app.use(bodyParser.json());

// Initialize Socket.IO server with CORS configuration
const io = new Server(ioPort, {
  cors: {
    origin: "http://localhost:3000", // Adjust this based on your client URL
    methods: ["GET", "POST"]
  }
});

// Track email to socket ID mapping
const emailToSocketMapping = new Map();

// Handle Socket.IO connections
io.on("connection", (socket) => {
  console.log("A client connected");

  socket.on("join-user", (data) => {
    const { roomId, emailID } = data;
    console.log("User", emailID, "joined room", roomId);
    emailToSocketMapping.set(emailID, socket.id);
    socket.join(roomId);
    socket.broadcast.to(roomId).emit("user-joined", { emailID });
  });

  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
