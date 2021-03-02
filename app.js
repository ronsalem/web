const express = require('express');
const app = express();
const path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/About.html'));
});

app.listen(process.env.PORT || 8080);