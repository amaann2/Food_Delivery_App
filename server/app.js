const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.MODE === "development") {
  app.use(morgan("dev"));
}

module.exports = app;
