import { io } from "socket.io-client";

// Keep a reference to the socket connection
let socket;

export const initSocket = async () => {
  // Return the existing socket connection if already created
  if (socket) {
    return socket;
  }

  const options = {
    reconnectionAttempts: 5, // Limit reconnection attempts to 5
    timeout: 10000, // Timeout for connection attempt
    transports: ["websocket"], // Use WebSocket as the primary transport
  };

  // Create a new socket connection only if it doesn't exist already
  socket = io(process.env.REACT_APP_BACKEND_URL, options);
  return socket;
};
