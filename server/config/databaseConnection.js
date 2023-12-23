const mongoose = require("mongoose");

exports.ConnectDb = () => {
  mongoose
    .connect(process.env.URI)
    .then(() => {
      console.log("Database is connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};
