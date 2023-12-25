const app = require("./app");
const { initDatabase } = require("./config/databaseConnection");
require("dotenv").config({ path: "./config.env" });
const PORT = process.env.PORT || 8080;

initDatabase();
app.listen(PORT, () => {
  console.log(`App is Running on Port ${PORT}`);
});
