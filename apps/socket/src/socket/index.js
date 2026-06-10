import { Server } from "socket.io";
import connectionHandler from "../handlers/connectionHandler.js";
import { SOCKET_EVENTS } from "../../../../packages/shared/src/socketEvents.js";

let io;

const initializeSocket = (httpServer) => {
   io = new Server(httpServer, {cors:{origin:"*"}});
   io.on(SOCKET_EVENTS.CONNECTION, connectionHandler);
   return io;
}

export const getIO = () => {
    if(!io){
     throw new Error("Socket.IO not Initialized")
    }
    return io;
}

export default initializeSocket;