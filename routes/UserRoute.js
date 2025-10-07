const express = require("express");
const Joi = require("joi");
class User {
  constructor(name, age, address, location) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.location = location;
  }
}
const router = express.Router();
router.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const filter = req.query.filter;
  res.send(`User Id: ${userId} , Filter   : ${filter}`);
});

router.post("/users/v1", (req, res) => {
  const { name, age, address, location } = req.body;

  if (!name || !age || !address || !location) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const user = new User(name, age, address, location);
  res.status(201).json({
    message: "User created successfully",
    user: user,
  });
});

const userSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  age: Joi.number().positive().required(),
  address: Joi.string().min(5).required(),
  name: Joi.string().required(),
});
router.post("/users/v2", (req, res) => {
  const { error } = userSchema.validate(req.bady);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { name, age, address, location } = req.body;
  res.status(201).json({
    message: "User created successfully",
    user: {
      name,
      age,
      address,
      location,
    },
  });
});

module.exports = router;
