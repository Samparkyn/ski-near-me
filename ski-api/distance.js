const lat1 = 51.498747;
const lng1 = -0.081656;
const lat2 = 51.520518;
const lng2 = -0.077871;

function getDistance(lat1,lng1,lat2,lng2) {
  // so lat1,lng1 would be the location entered... lat2,lng2 the coords of each ski resort
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lng2-lng1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
  console.log(d);
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

const result = getDistance(lat1, lng1, lat2, lng2);
console.log('Result is: ', result, 'km');

module.exports = getDistance;
