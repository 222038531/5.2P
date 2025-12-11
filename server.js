const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extended : false}));


// Import route file
const bookRoutes = require('./routes/book');

// Mount the route at /api/food
app.use('/api/book', bookRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Book Menu Home Page!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
