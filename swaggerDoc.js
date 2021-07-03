const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0", // Specification (optional, defaults to swagger: '2.0')
    info: {
      title: "Web services for Boiler Plate", // Title (required)
      version: "1.0.0", // Version (required)
    },
    servers: [
      {
        url: `${process.env.BASE_URL}/api`,
        description: process.env.NODE_ENV,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  // Path to the API docs
  // apis: ["./app/models/*.js", './app/routes/*.js','./api-v2-'],
  apis: ["./app/routes/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);
module.exports = (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      explorer: false,
    })
  );
};
