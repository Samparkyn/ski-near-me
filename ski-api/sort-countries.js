const fs = require('fs');
const https = require('https');
const filePath = 'countries.json';
// flag URL: https://restcountries.eu/data/countryCode.svg

const newCountries = {}
fs.readFile(filePath, 'utf8', (err, data) => {
  const countries = JSON.parse(data);
  makeNewCountries(countries);
});

/*
  1. load countries file (done)
  2. loop over each country (done)
  3. make the id (index + 1) (done)
  4. get the name of the country (done)
  5. add key/value pair to the 'countries' obj (done)
  6. download a flag for each country
  7. save new countries object in a new json file
*/

function makeNewCountries(countries) {
  countries.forEach((country, index) => {
    const id = index + 1;
    const countryCode = country.alpha3Code.toLowerCase();
    const name = country.name;
    newCountries[id] = { name, countryCode };
    downloadFlag(countryCode, country.flag);
  });
  
  saveFile();
}


function downloadFlag(countryCode, url) {
  const file = fs.createWriteStream(`flags/${countryCode}.svg`);
  const request = https.get(url, res => {
    res.pipe(file);
  });
}


function saveFile() {
  const data = JSON.stringify(newCountries);
  fs.writeFile('new_countries.json', data, (err) => {
    if (err) {
      console.log('There was an error!', err);
    }

    console.log('new_countries file saved! :-)');
  });
}
