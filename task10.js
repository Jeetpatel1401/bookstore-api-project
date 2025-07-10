const axios = require('axios');

// Async callback-style function to get all books
async function getAllBooks() {
  try {
    const response = await axios.get('http://localhost:5000');
    console.log("All Books:", response.data);
  } catch (error) {
    console.error("Error fetching books:", error.message);
  }
}

// Call the function
getAllBooks();
