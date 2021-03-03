const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.get('/about', (req, res) => {
    res.sendFile('/about.html', { root: __dirname });
});

app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => console.log(`listening on port ${port}!`));

