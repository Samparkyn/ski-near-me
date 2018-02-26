const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors')
const app        = express();
const port       = 8000;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

require('./routes')(app, {});

app.listen(port, () => {
  console.log("hellooo im listening on port:", port);
});
