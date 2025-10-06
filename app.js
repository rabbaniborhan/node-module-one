const express = require("express");
const UserRouter = require("./routes/UserRoute");

const app = express();

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default route
app.get("/", (req, res) => {
  res.send("server is running");
});

// User routes
app.use(UserRouter);

// Server start
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
