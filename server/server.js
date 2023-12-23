const app = require("./app");
const { ConnectDb } = require("./config/databaseConnection");
require("dotenv").config({ path: "./config.env" });
const PORT = process.env.PORT;
ConnectDb();
app.listen(PORT, () => {
  console.log(`App is Running on Port ${PORT}`);
});
