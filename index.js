const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3009;

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/about.html'));
});

app.get('/', (req, res) => {
    res.sendFile('html/home.html', { root: path.join(__dirname, '../html') });
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/about.html'));
});

app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/shop.html'));
});
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => console.log(`listening on port ${port}!`));

