const express = require("express");
const morgan = require("morgan");
const { initRoutes } = require("./routes");
require("dotenv").config({ path: "./config.env" });
const initCORS = require("./middleware/cors");
const app = express();

initCORS(app);

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// API ROUTES
initRoutes(app);

module.exports = app;
