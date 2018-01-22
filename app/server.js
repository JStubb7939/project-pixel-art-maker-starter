const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 1337;
const router = express.Router();
const bodyParser = require('body-parser');

app.set('view engine', 'html');

app.use([bodyParser.json(), bodyParser.urlencoded({extended: true})]);
app.use(express.static(path.join(__dirname)));
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Server Error');
});

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, (err) => {
  err
    ? console.log('Cannot connect...', err)
    : console.log(`Connected! Server is listening on port ${port}`);
});