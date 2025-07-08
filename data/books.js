const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

// General User routes
router.get('/', booksController.getAllBooks);
router.get('/isbn/:isbn', booksController.getBookByISBN);
router.get('/author/:author', booksController.getBooksByAuthor);
router.get('/title/:title', booksController.getBooksByTitle);
router.get('/review/:isbn', booksController.getBookReviews);

// Registered User routes
router.put('/review/:isbn', booksController.addOrUpdateReview);
router.delete('/review/:isbn', booksController.deleteReview);

module.exports = router;
