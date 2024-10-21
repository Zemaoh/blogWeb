const express = require('express');
const app = express();


app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


let posts = [];


app.get('/', (req, res) => {
    res.render('index', { posts });
});


app.get('/new', (req, res) => {
    res.render('new');
});


app.post('/new', (req, res) => {
    const { title, content } = req.body;
    if (title && content) {
        posts.push({ title, content });
    }
    res.redirect('/');
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
