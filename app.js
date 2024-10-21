const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware to serve static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Blog posts storage (in-memory)
let posts = [];

// Route to home page
app.get('/', (req, res) => {
    res.render('index', { posts });
});

// Route to create a new post (GET)
app.get('/new', (req, res) => {
    res.render('new');
});

// Route to handle new post submission (POST)
app.post('/new', (req, res) => {
    const { title, content } = req.body;
    if (title && content) {
        posts.push({ title, content });
    }
    res.redirect('/');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
