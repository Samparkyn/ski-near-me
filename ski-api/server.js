const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');

const app            = express();

require('./routes')(app, {});

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("hellooo im listening");
});
