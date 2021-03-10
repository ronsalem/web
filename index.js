const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3009;

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/html files/about.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/html files/home.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname + '/html files/about.html'));
});

app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname + '/html files/about.html'));
});
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => console.log(`listening on port ${port}!`));

const os = require('os')
const uptime =  console.log(os.uptime());