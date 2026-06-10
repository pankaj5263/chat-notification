import express from 'express';
import swaggerUi from "swagger-ui-express";

import swaggerConfig from "@packages/config/swagger";
import requestLogger from './middleware/requestLogger.js';
import notFound from './middleware/notFound.js';
import errorHandler from './middleware/errorHandler.js';

const app  = express();

app.use(express.json());
app.use(requestLogger);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerConfig)
);

app.get('/health', (req, res) => {
  res.send("Server is running!!");
});

app.use(notFound);

app.use(errorHandler);




export default app;