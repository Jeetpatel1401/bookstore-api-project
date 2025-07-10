const axios = require('axios');

// Function to get books by title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`http://localhost:5000/title/${title}`);
    console.log(`Books with title "${title}":`, response.data);
  } catch (error) {
    console.error(`Error fetching books with title "${title}":`, error.message);
  }
}

// Example: call with "Things Fall Apart"
getBooksByTitle("Things Fall Apart");
