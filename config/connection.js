const mongoose = require("mongoose");

// Create a connection to database in MongoDB Atlas.
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
