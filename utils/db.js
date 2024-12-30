const mongoose = require("mongoose");

console.log("ok2");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.error("Error connectDB", error);
  }
};

module.exports = connectDB;
