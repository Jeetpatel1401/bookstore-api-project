const axios = require('axios');

// Function to get books by author
async function getBooksByAuthor(authorName) {
  try {
    const response = await axios.get(`http://localhost:5000/author/${authorName}`);
    console.log(`Books by ${authorName}:`, response.data);
  } catch (error) {
    console.error(`Error fetching books by ${authorName}:`, error.message);
  }
}

// Example: call with "Chinua Achebe"
getBooksByAuthor("Chinua Achebe");
