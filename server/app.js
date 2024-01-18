const express = require("express");
require("dotenv").config({ path: "./config.env" });
const { initRoutes } = require("./routes");
const { initCORS } = require("./middleware/cors");
const { initLogging } = require("./middleware/Logging");
const { initRateLimit } = require("./middleware/rate-limit");

const app = express();

// Middleware
initCORS(app);
initLogging(app);
initRateLimit(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
initRoutes(app);

module.exports = app;
