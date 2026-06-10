import { SOCKET_EVENTS } from "../../../../packages/shared/src/socketEvents.js";
import { getIO } from "../socket/index.js";

const registerMessageEvents = (socket) => {
  const io = getIO();

  socket.on(
    SOCKET_EVENTS.MESSAGE_SEND,
    ({ roomId, message }) => {
      console.log("MESSAGE EVENT");
      console.log("ROOM:", roomId);
      console.log("MESSAGE:", message);

      io.to(roomId).emit(
        SOCKET_EVENTS.MESSAGE_RECEIVED,
        {
          roomId,
          senderId: socket.id,
          message,
          createdAt: new Date(),
        }
      );

      console.log("MESSAGE EMITTED");
    }
  );
};

export default registerMessageEvents;