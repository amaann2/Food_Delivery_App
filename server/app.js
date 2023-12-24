const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const globalErrorController = require("./middleware/globalErrorController");
require("dotenv").config({ path: "./config.env" });

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
const userRouter = require("./routes/userRoutes");
app.use("/api/v1/users", userRouter);
app.use(globalErrorController);
module.exports = app;
