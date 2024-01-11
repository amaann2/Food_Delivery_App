const app = require("./app");
const { initDatabase } = require("./config/databaseConnection");

require("dotenv").config({ path: "./.env" });

// Initialize the database connection
initDatabase();

// Start the express server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App is Running on Port ${PORT}`);
});
