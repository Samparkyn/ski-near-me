window.addEventListener('load', startApp);

function startApp() {
  console.log("App working, yay!");
  
  const goButton = document.querySelector('.location-button');
  const locationInput = document.querySelector('.location-input');

  goButton.addEventListener('click', () => {
    const key = 'AIzaSyCduF0P8CRp-dE15ndmheXPLB_u4ZSgY0s';
    const coordsAPIURL = `https://maps.google.com/maps/api/geocode/json?address=${locationInput.value}&key=${key}`;

    fetch(coordsAPIURL)
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        const coords = data.results[0].geometry.location;
        // const coords = [51.498747, -0.081656];
        console.log(data, coords);
        
        const skiAPIURL = `http://localhost:8000/resorts/closest?lat=${coords.lat}&lng=${coords.lng}`;
        console.log('skiapi', skiAPIURL);
        
        return fetch(skiAPIURL, {
          // method: "POST",
          // body: JSON.stringify(coords),
          // headers: {
          //   'Content-Type': 'application/json'
          // }
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('response from the server:', data);
      })
  });
}
