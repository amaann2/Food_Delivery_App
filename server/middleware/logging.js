const morgan = require("morgan");
require("dotenv").config({ path: "./.env" });

exports.initLogging = (app) => {
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
};
