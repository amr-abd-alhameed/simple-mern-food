const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 4000;
const connectDB = require("./config/connectionDB");

app.use(express.json());

app.use("/recipe", require("./routes/recipe"));

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log("server is working on port ", port);
  });
};

startServer();
