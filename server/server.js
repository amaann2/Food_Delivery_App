const app = require("./app");
const { ConnectDb } = require("./config/databaseConnection");
require("dotenv").config({ path: "./config.env" });

ConnectDb();
app.listen(process.env.PORT, () => {
  console.log(`App is Running on Port ${process.env.PORT}`);
});
