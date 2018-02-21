window.addEventListener('load', startApp);

function startApp() {
  console.log("App working, yay!");
  
  // var url = "https://restcountries.eu/rest/v1";
  // var request = new XMLHttpRequest();
  // request.open("GET", url);
  
  const goButton = document.querySelector('.location-button');
  const locationInput = document.querySelector('.location-input');


  // 1. get coordinates
  // 2. send coordinates to server
  goButton.addEventListener('click', () => {
    const skiAPIURL = 'localhost:8000/ski';
    const coordsAPIURL = `maps.google.com/maps/api/geocode/json?address=${locationInput.value}`;

    // Chain several FETCH :-)
    fetch(coordsAPIURL)
      .then(response => response.json())
      .then(data => {
        const coords = data.results[0].geometry.location;
        // step 1 complete

        // start of step 2
        return fetch(skiAPIURL, {
          method: "POST",
          body: JSON.stringify(coords)
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('response from the server:', data);
        // step 2 complete
        // yeah your idea was correct. It's just that the syntax can be tricky :-)
        // nah.. you were almost there. You rock! :D
      })
  });
  
  // fetch(`http://localhost:8000/ski`, {
  //   method: "POST",
  //   body: JSON.stringify(data)
  // }).then(res => {
  //   console.log("Request complete! response:", res);
  // });
  
}



// get input value
// api call (reverse geo-query) to get coordinates out of input value
// https://www.youtube.com/watch?v=IGYxfTTpoFg
// `http://maps.google.com/maps/api/geocode/json?address=${value}`
// save value


// weekend
// api call to server to get closest resorts based on coordinates
