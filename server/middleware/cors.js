const cors = require("cors");

exports.initCORS=(app)=> {
  app.use(
    cors({
      origin: [
        `https://${process.env.HOST}`,
        `http://${process.env.HOST}`,
        `${process.env.HOST}`,
        "http://localhost:3000",
        "http://localhost:5173",
        "http://localhost:5174",
      ],
      methods: ["GET", "POST", "PUT", "OPTIONS", "DELETE"],
      credentials: true,
    })
  );
}

