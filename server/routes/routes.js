const distance = require('../distance.js');
const fs = require('fs');

// try now
let resorts;
fs.readFile(__dirname + '/../new_resorts.json', 'utf8', function (err, data) {
    if (err) {
      console.log('Error: ' + err);
      return;
    }
      
  resorts = JSON.parse(data);
});
  
module.exports = function(app, db) {
  app.post('/ski', (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify({}));
  });
  
  app.get('/resorts/count', (req, res) => {
    res.send(JSON.stringify({
      resortsLength: resorts.length
    }));
  });
  
  // new endpoint to get the closest resorts
  app.get('/resorts/closest', (req, res) => {
    // get the coordinates that the client (browser) sends to the server
    const lat1 = parseFloat(req.query.lat)
    const lng1 = parseFloat(req.query.lng)
    // const limit = req.query.limit
    
    const distances = resorts.map((resort) => {
      const lat2 = resort.coords[0];
      const lng2 = resort.coords[1];
      console.log(resort);
      return {
        name: resort.name,
        distance: Math.round(distance(lat1, lng1, lat2, lng2) * 100) / 100,
        website: resort.officialWebsite
      }
    }).sort((a, b) => a.distance - b.distance);

    // const closest = distances.slice(0, limit);
    const closest = distances.slice(0, 10);
    res.send(JSON.stringify(closest))
    // get this to work :)
  });
};
