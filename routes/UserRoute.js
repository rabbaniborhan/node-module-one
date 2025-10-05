const express = require("express");
const router = express.Router();
router.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const filter = req.query.filter;
  res.send(`User Id: ${userId} , Filter   : ${filter}`);
});

router.post("/users", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    console.log("name and age not found");
  }
  const user = { name, age };
  res.status(201).json({
    message: "User created successfully",
    user: user,
  });
});

module.exports = router;
