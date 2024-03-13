const http = require("http");
const socketio = require("socket.io");

// Create a server
const server = http.createServer((req, res) => {
  // We won't be handling HTTP requests
});

// Initialize Socket.IO
const io = socketio(server, {
  cors: {
    origin: "*", // Allow requests from all origins (replace "*" with your client's origin)
    methods: ["GET", "POST"], // Allow only GET and POST requests
    allowedHeaders: ["Content-Type"], // Allow only specific headers
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  },
});
// Array to store connected clients
let clients = [];

// Event handler for new connections
io.on("connection", (socket) => {
  console.log("New connection:", socket.id);

  // Add new client to the array
  clients.push(socket);

  // Event handler for receiving messages
  socket.on("message", (message) => {
    console.log("Message received from", socket.id, ":", message);

    // Broadcast the message to all clients except the sender
    clients.forEach((client) => {
      if (client !== socket) {
        client.emit("message", message);
      }
    });
  });

  // Event handler for disconnections
  socket.on("disconnect", () => {
    console.log("Disconnected:", socket.id);

    // Remove the client from the array
    clients = clients.filter((client) => client !== socket);
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
