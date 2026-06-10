import http from 'http';

import app from './app.js';

import initializeSocket from './socket/index.js';

import env from "../../../packages/config/src/env.js";

const httpServer = http.createServer(app);

initializeSocket(httpServer);

httpServer.listen(env.SOCKET_PORT, () => {
    console.log(
    `Socket service running on port ${env.SOCKET_PORT}`
  );
})