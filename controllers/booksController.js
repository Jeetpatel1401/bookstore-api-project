const books = require('../data/books');

exports.getAllBooks = (req, res) => {
  res.json(books);
};

exports.getBookByISBN = (req, res) => {
  const book = books[req.params.isbn];
  book ? res.json(book) : res.status(404).send('Book not found');
};

// and so on for other methods...
