const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
