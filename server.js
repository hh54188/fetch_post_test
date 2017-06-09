/*
    https://github.com/expressjs/body-parser/issues/247
    https://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters
    *https://github.com/expressjs/body-parser
    *https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
    https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express-in-nodejs
*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(express.static('.'));

app.use( bodyParser.json({ type: (req) => {
    return req.get('Content-Type') === 'secret'
} }) );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}) );
app.use( bodyParser.text() );

app.post('/upload', function (req, res) {
    console.log(req.get('Content-Type'));
    console.log(req.body);
});

app.listen(80);