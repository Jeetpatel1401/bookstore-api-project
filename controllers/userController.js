const users = require('../data/users');  // user data (in-memory)
const jwt = require('jsonwebtoken');

// Secret key for JWT (in real apps, store in env variable)
const SECRET_KEY = 'mysecretkey';

// Register a new user
exports.registerUser = (req, res) => {
  const { username, password } = req.body;

  // Check if username already exists
  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return res.status(400).json({ message: 'Username already taken' });
  }

  // Add new user
  users.push({ username, password });
  res.status(201).json({ message: 'User registered successfully' });
};

// Login user and generate token
exports.loginUser = (req, res) => {
  const { username, password } = req.body;

  // Check if user exists and password matches
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  // Generate JWT token
  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });

  res.json({
    message: 'Login successful',
    token
  });
};
