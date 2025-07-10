const express = require('express');
let books = require('./booksdb');
let { users, isValid, authenticateUser } = require('./users');
let router = express.Router();

// 6. Register new user
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (isValid(username)) {
    return res.status(400).json({ message: "User already exists" });
  }
  users.push({ username, password });
  res.json({ message: "User registered successfully" });
});

// 7. Login user
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (authenticateUser(username, password)) {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// 8. Add/Modify review
router.put('/review/:isbn', (req, res) => {
  const { username, review } = req.body;
  if (!books[req.params.isbn].reviews[username]) {
    books[req.params.isbn].reviews[username] = review;
    res.json({ message: "Review added" });
  } else {
    books[req.params.isbn].reviews[username] = review;
    res.json({ message: "Review updated" });
  }
});

// 9. Delete review
router.delete('/review/:isbn', (req, res) => {
  const { username } = req.body;
  delete books[req.params.isbn].reviews[username];
  res.json({ message: "Review deleted" });
});

module.exports = router;
