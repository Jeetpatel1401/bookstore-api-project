const axios = require('axios');

// Function to get book by ISBN using Promises
function getBookByISBN(isbn) {
  axios.get(`http://localhost:5000/review/${isbn}`)
    .then(response => {
      console.log(`Reviews for Book with ISBN ${isbn}:`, response.data);
    })
    .catch(error => {
      console.error(`Error fetching book with ISBN ${isbn}:`, error.message);
    });
}

// Call the function with example ISBN "1"
getBookByISBN("1");
