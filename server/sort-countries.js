const fs = require('fs');
const https = require('https');
const filePath = 'countries.json';
// flag URL: https://restcountries.eu/data/countryCode.svg

const newCountries = {}
fs.readFile(filePath, 'utf8', (err, data) => {
  const countries = JSON.parse(data);
  makeNewCountries(countries);
});

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
