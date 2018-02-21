const distance = require('../distance.js');

var fs = require('fs');
var filePath = __dirname + '/resorts.json';
let resorts;

fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      console.log('Error: ' + err);
      return;
    }
      
  resorts = JSON.parse(data);
});
  
module.exports = function(app, db) {
  app.get('/ski', (req, res) => {
    res.send(resorts);
  });
  
  app.get('/resorts/count', (req, res) => {
    res.send(JSON.stringify({
      resortsLength: resorts.length
    }));
  });
  
  // new endpoint to get the closest resorts
  app.get('/resorts/closest', (req, res) => {
    // get the coordinates that the client (browser) sends to the server
    const coordinates = req.body
    
    // log them
    console.log(coordinates);
    
    // get this to work :)
  });
};
