const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("connected successfully to database"))
    .catch((error) => console.log(error));
};
module.exports = connectDB;
