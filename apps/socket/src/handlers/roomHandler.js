import { SOCKET_EVENTS } from "../../../../packages/shared/src/socketEvents.js";

const registerRoomEvents = (socket) => {
  socket.on(SOCKET_EVENTS.ROOM_JOIN, ({ roomId }) => {
    console.log("ROOM JOIN EVENT");
    console.log(roomId);

    socket.join(roomId);
  });

  socket.on(SOCKET_EVENTS.ROOM_LEAVE, ({ roomId }) => {
    console.log("ROOM LEAVE EVENT");
    console.log(roomId);

    socket.leave(roomId);
  });
};

export default registerRoomEvents;