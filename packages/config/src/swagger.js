import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Chat Notification API",
      version: "1.0.0",
      description:
        "Realtime Chat & Notification Backend",
    },
    servers: [
      {
        url: "http://localhost:8080/api/v1",
      },
    ],
  },

  apis: [
    "./src/modules/**/*.js",
  ],
};

const swaggerSpec =
  swaggerJsdoc(options);

export default swaggerSpec;