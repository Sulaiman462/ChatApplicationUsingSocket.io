Running the Server and Client Applications

Prerequisites - 
Node.js installed on your machine

Server - 

Clone this repository to your local machine.
Navigate to the server directory in your terminal.
Install dependencies by running npm install.
Start the server by running npm start.
The server should now be running on http://localhost:3000.

Client - 
Navigate to the client directory in your terminal.
Install dependencies by running npm install.
Start the client application by running npm start.
The client application should open automatically in your default web browser.
Application Architecture and Concurrency Handling
The Socket.io Chat Application follows a client-server architecture. The server is implemented using Node.js and Socket.io, while the client-side application is built using HTML, CSS, and JavaScript.


Server Architecture: The server application is responsible for handling incoming socket connections from clients, managing chat messages, and broadcasting messages to connected clients. It utilizes the event-driven architecture of Socket.io to handle real-time communication between clients and the server.

Client Architecture: The client-side application provides a simple interface for users to send and receive chat messages. It establishes a WebSocket connection to the server using Socket.io and listens for incoming messages. When a message is received, it appends it to the chat interface.

Concurrency Handling: Socket.io handles concurrency by managing multiple socket connections asynchronously. Each client connection is handled as an independent event, allowing multiple clients to communicate with the server simultaneously without blocking other connections.

Assumptions and Design Choices
Real-Time Communication: The application is designed to facilitate real-time communication between multiple clients. As a result, Socket.io was chosen as the WebSocket library for its support for bidirectional communication and event-based architecture.

Simplicity and Usability: The client-side interface is kept simple and intuitive to ensure ease of use for all users. It provides basic functionality for sending and receiving messages without unnecessary complexity.

Accessing the Chat Application
Once both the server and client applications are running, you can access the chat application by opening your web browser and navigating to http://localhost:3000. You should see the chat interface, where you can start sending and receiving messages in real time.

