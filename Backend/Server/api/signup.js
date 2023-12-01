// api/signup.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// In-memory array to store user data
const users = [];

// Signup route
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the user already exists
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(400).json({ success: false, message: 'User already exists' });
  }

  // Hash the password before storing it
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Create a new user
  const newUser = { username, email, passwordHash: hashedPassword };
  users.push(newUser);

  res.json({ success: true, message: 'Registration successful' });
});

module.exports = router;
// api/signup.js

