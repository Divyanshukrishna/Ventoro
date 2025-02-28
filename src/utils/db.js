const mongoose = require("mongoose");

exports.connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDB connected ${conn.connection.host}`);
  } catch (err) {
    console.log(`error in connecting to DB: ${err.message}`);
  }
};
