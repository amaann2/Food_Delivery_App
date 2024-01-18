// Handle uncaught exception
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION !! server closing down");
  console.log(err.name);
  console.log(err.message);
  process.exit(1);
});

const app = require("./app");
require("dotenv").config({ path: "./.env" });

// Initialize the database connection
const { initDatabase } = require("./db/databaseConnection");
initDatabase();

// Start the express server
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`App is Running on Port ${PORT}`);
});

// Handled unhandledrejection
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION !! SERVER CLOSING DOWN");

  console.log(err.name);
  console.log(err.message);

  server.close(() => {
    process.exit(1);
  });
});
