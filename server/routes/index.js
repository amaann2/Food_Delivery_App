const globalErrorController = require("../middleware/globalErrorController");
const userRouter = require("../routes/userRoutes");
const adressRouter = require("../routes/adressRoutes");

exports.initRoutes = (app) => {
  app.use("/api/v1/users", userRouter);
  app.use("/api/v1/adress", adressRouter);
  app.use(globalErrorController);
};
