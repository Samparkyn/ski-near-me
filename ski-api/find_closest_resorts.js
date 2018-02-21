const resorts = require('./new_resorts');
const distance = require('./distance');

function getCoords(resorts){
  const resortCoords = [];
  resorts.forEach((resort) => {
    const lat = resort.coords[0];
    const lng = resort.coords[1];
    // resortCoords.push([lat, lng]);
  });
}

function getClosestResorts() {
  //loop through the new array of all resort coords(lats/lngs) (would it be an array?..)
  // find the closest distances to the location entered.. return the closest 3 ?
  
}

getCoords(resorts);
