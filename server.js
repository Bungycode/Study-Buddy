require("dotenv").config();
const express = require("express");

const connectDB = require("./config/connection");
const notFoundMiddleware = require("./middleware/not-found");
const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 3000;

// request body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.get("/api/v1", (req, res) => {
  try {
    res.json({ success: true, message: "Home page" });
    
  } catch (error) {
    console.log(error)
  }
});

app.post("/api/v1", async (req, res) => {
  try {
    console.log(req.body)
    const user = await User.create(req.body)
    return res.json({ success: true, message: "Post request", data: user });
    
  } catch (error) {
    console.log(error)
  }
});

// Middleware
// Catch all for non-existent routes.
app.use(notFoundMiddleware);

const start = async () => {
  try {
    // Connect to database then initiate express server.
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`The server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
