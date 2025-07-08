const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/users');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/books', bookRoutes);
app.use('/users', userRoutes);

app.listen(5000, () => console.log('Bookstore API running on port 5000'));
