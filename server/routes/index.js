const globalErrorController = require("../middleware/globalErrorController");
const userRouter = require("../routes/userRoutes");
const adressRouter = require("../routes/adressRoutes");
const restaurantRouter = require("../routes/restaurantRoutes");
const menuRouter = require("../routes/menuRoutes");

exports.initRoutes = (app) => {
  app.use("/api/v1/users", userRouter);
  app.use("/api/v1/adress", adressRouter);
  app.use("/api/v1/restaurant", restaurantRouter);
  app.use("/api/v1/menu", menuRouter);
  app.use(globalErrorController);
};
