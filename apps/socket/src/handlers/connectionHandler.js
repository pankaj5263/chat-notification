import { SOCKET_EVENTS } from "../../../../packages/shared/src/socketEvents.js";
import registerMessageEvents from "./messageHandler.js";
import registerRoomEvents from "./roomHandler.js";

const connectionHandler = (socket) => {
  console.log(`Connected ${socket.id}`);
  
  registerRoomEvents(socket);
  registerMessageEvents(socket);

  socket.on(SOCKET_EVENTS.DISCONNECT, (reason)=>{
     console.log(
      `Disconnected: ${socket.id} | ${reason}`
    );
  });
}

export default connectionHandler;