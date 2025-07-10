const express = require('express');
const app = express();
app.use(express.json());  // to parse JSON bodies

// Sample book data
let books = {
  "1": {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    reviews: {}
  },
  "2": {
    title: "The Book Thief",
    author: "Markus Zusak",
    reviews: {}
  }
};

// Task 1: Get all books
app.get('/', (req, res) => {
  res.json(books);
});

// Task 5: Get reviews for a book by ISBN
app.get('/review/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  const book = books[isbn];
  
  if (book) {
    res.json(book.reviews);
  } else {
    res.status(404).json({ message: "Book not found." });
  }
});

// Task 6: Register new user (placeholder)
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.json({ message: `User ${username} registered successfully.` });
  } else {
    res.status(400).json({ message: "Username and password required." });
  }
});

// Task 9: Delete book review added by that particular user
app.delete('/review/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  const { reviewer } = req.body;
  const book = books[isbn];
  if (!book) {
    return res.status(404).json({ message: "Book not found." });
  }
  if (!reviewer) {
    return res.status(400).json({ message: "Reviewer name required." });
  }
  if (!book.reviews[reviewer]) {
    return res.status(404).json({ message: "Review not found for this reviewer." });
  }
  delete book.reviews[reviewer];
  res.json({ message: "Review deleted successfully." });
});


// Task 3 & Task 12: Get books by author
app.get('/author/:authorName', (req, res) => {
  const authorName = req.params.authorName.toLowerCase();
  const matchingBooks = {};

  for (const isbn in books) {
    if (books[isbn].author.toLowerCase() === authorName) {
      matchingBooks[isbn] = books[isbn];
    }
  }

  if (Object.keys(matchingBooks).length > 0) {
    res.json(matchingBooks);
  } else {
    res.status(404).json({ message: "No books found for this author." });
  }
});


// Task 4 & Task 13: Get books by title
app.get('/title/:title', (req, res) => {
  const title = req.params.title.toLowerCase();
  const matchingBooks = {};

  for (const isbn in books) {
    if (books[isbn].title.toLowerCase() === title) {
      matchingBooks[isbn] = books[isbn];
    }
  }

  if (Object.keys(matchingBooks).length > 0) {
    res.json(matchingBooks);
  } else {
    res.status(404).json({ message: "No books found with this title." });
  }
});


// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
