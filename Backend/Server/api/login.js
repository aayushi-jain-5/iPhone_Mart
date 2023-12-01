// api/login.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/Login',(req,res)=>{
  res.send('Login');
})

// In-memory array to store user data
const users = [
  { username: 'user1', email: 'user1@example.com', passwordHash: '$2b$10$RZdA1g0i31aPvfxI9A1z1OJzGd8v6tizh6Nm.H2Vulztk6UBZzYTC' }, // Hashed password: 'password1'
  { username: 'user2', email: 'user2@example.com', passwordHash: '$2b$10$Z1OwziLUKEqubExlbfRVXuDImbyQHYSgNq/FNHNNCl8Y7ebMRCM/a' }, // Hashed password: 'password2'
];

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  // Compare the provided password with the hashed password
  const passwordMatch = await bcrypt.compare(password, user.passwordHash);

  if (!passwordMatch) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  res.json({ success: true, message: 'Login successful', user: { username: user.username, email: user.email } });
});

module.exports = router;
