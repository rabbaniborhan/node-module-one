const express = require("express");
class user {
  constructor(name, age) {
    (name = this.name), (age = this.age);
  }
}
const router = express.Router();
router.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const filter = req.query.filter;
  res.send(`User Id: ${userId} , Filter   : ${filter}`);
});

router.post("/users", (req, res) => {
  const users = user(req.body);

  if (!name) {
    res.status(400).json({
      error: "Name is required",
    });
  }
  if (!age) {
    res.status(400).json({
      error: "Age is required",
    });
  }
  const user = { name, age };
  res.status(201).json({
    message: "User created successfully",
    user: user,
  });
});

module.exports = router;
