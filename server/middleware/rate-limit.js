const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  max: 100,
  windowMs: 2 * 60 * 1000,
  message: "Too many Requests from this IP, please try again in 2 minute !",
});
exports.initRateLimit = (app) => {
  app.use("/api", limiter);
};
