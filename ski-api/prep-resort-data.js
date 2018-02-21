
// Current structure:
// {
//   "SkiArea": {
//     "id": "1",
//     "name": "Smokey Mountain Ski Club",
//     "official_website": "http://www.skismokey.ca/",
//     "geo_lat": "52.977947",
//     "geo_lng": "-66.92094",
//     "operating_status": "1"
//   },
//   "Region": [
//     {
//       "name": "Newfoundland and Labrador",
//       "id": "335",
//       "RegionsSkiArea": {
//         "id": "1",
//         "ski_area_id": "1",
//         "region_id": "335",
//         "temp_region": "60",
//         "temp_country": "31"
//       }
//     }
//   ]
// }

// Desired structure:
// {
//   "id": "1",
//   "name": "Smokey Mountain Ski Club",
//   "official_website": "http://www.skismokey.ca/",
//   "coords": [52.977947, -66.92094],
//   "countries": [1, 2]
// }


/*

  Goal: Format the data in the way that we want it. See above.

  Steps:
  1. Understand how we want the new data (and why)
  2. Load the full resorts data
  3. For each resort, pick the keys that we want
  4. Save those keys into a new object
  5. Save each of those objects into a new JSON file

*/

var fs = require('fs');
var filePath = __dirname + '/resorts.json';

function loadResorts() {
  return JSON.parse(fs.readFileSync(filePath));
}


function makeNewResorts(resorts) {
  console.log(resorts.length);
  return resorts.map(resort => {
    const name = resort.SkiArea.name;
    const officialWebsite = resort.SkiArea.official_website;
    const coords = [parseFloat(resort.SkiArea.geo_lat), parseFloat(resort.SkiArea.geo_lng)];
    return { name, officialWebsite, coords }
  });
}


function saveResorts(newResorts) {
  const data = JSON.stringify(newResorts);
  fs.writeFile('new_resorts.json', data, (err) => {
    if (err) {
      console.log('There was an error!', err);
    }

    console.log('new_resorts file saved! :-)');
  });
}

// chain(loadResorts, newResorts, saveResorts)

const resorts = loadResorts();
console.log('resorts len', resorts.length, 'type of resorts', typeof resorts)
const newResorts = makeNewResorts(resorts);
saveResorts(newResorts);
