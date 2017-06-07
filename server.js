const express = require('express');
const app = express();
app.use(express.static('.'));

app.post('/upload', function (req, res) {
    console.log(req.get('Content-Type'));
});

app.listen(80);