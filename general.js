const express = require('express');
let books = require('./booksdb');
let router = express.Router();

// 1. Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// 2. Get book by ISBN
router.get('/isbn/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  res.json(books[isbn]);
});

// 3. Get books by author
router.get('/author/:author', (req, res) => {
  const result = Object.values(books).filter(book => book.author === req.params.author);
  res.json(result);
});

// 4. Get books by title
router.get('/title/:title', (req, res) => {
  const result = Object.values(books).filter(book => book.title === req.params.title);
  res.json(result);
});

// 5. Get book review
router.get('/review/:isbn', (req, res) => {
  res.json(books[req.params.isbn].reviews);
});

module.exports = router;
