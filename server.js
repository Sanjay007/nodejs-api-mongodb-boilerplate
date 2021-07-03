require("dotenv-safe").config();
const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
const initMongo = require("./config/mongo");

app.set("port", process.env.PORT || 9000);
const swaggerDoc = require("./swaggerDoc");
const logger = require("./lib/winston");

// for parsing json
app.use(
  bodyParser.json({
    limit: "20mb",
  })
);
// for parsing application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    limit: "20mb",
    extended: true,
  })
);

// Init all other stuff
app.use(cors());
app.use(compression());
app.use(helmet());

// Load all routes dynamically
app.use("/api", require("./app/routes"));

app.listen(app.get("port"));

process.on("unhandledRejection", (reason, promise) => {
  // Logging to logger
  logger.error(promise);
});

// Init MongoDB
initMongo();
// If you want to add swagger doc else comment this
swaggerDoc(app);

module.exports = app;
