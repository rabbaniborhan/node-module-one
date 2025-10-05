const express = require("express");
const UserRouter = require("./routes/UserRoute");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use(UserRouter);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
