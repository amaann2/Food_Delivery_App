const mongoose = require("mongoose");

exports.initDatabase = () => {
  mongoose
    .connect(process.env.URI)
    .then(() => {
      console.log("Database is connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};
