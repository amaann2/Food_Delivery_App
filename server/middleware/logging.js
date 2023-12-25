const morgan = require("morgan");

exports.initLogging = (app) => {
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
};
