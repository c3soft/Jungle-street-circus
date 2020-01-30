const connection = require('./conf');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors());

app.use(bodyParser.json()); // Support JSON-encoded bodies

// CONNECTION PORT ///////////////////////////////////////////////////
app.listen(port, err => {
  if (err) {
    throw new Error('Error listening port ...');
  }
  console.log(`Server is listening on ${port}`);
});

//GET EVENTS ///////////////////////////////////////
app.get('/events', (req, res) => {
  res.send('hello world');
});
