// region URL https://skimap.org/Regions/view/385.xml

var fs = require('fs');
var filePath = __dirname + '/resorts.json';
let resorts;

fs.readFileSync(filePath, 'utf8', function (err, data) {
    if (err) {
      console.log('Error: ' + err);
      return;
    }
  const trimmedData = data.trim();
  resorts = JSON.parse(trimmedData);
});


const resort = {
  "id": "999",
  "name": "Villars-Gryon",
  "official_website": "http://www.villars.ch",
  "geo_lat": "46.3039262354513",
  "geo_lng": "7.05519676208496",
  "country_ids": ["10", "11"]
}


const country = {
  
}
