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
        const coords = data.results[0].geometry.location;
        
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
      .then(displayResults)
  });
  
}

function createResortCard(resort){
  const result = document.createElement('div');
  result.classList.add('result-container');
  
  const name = document.createElement('h3');
  name.classList.add('resort-name');
  name.innerText = resort.name;
  
  const distance = document.createElement('p');
  distance.classList.add('resort-distance');
  distance.innerText = resort.distance;
  
  const website = document.createElement('a');
  website.classList.add('resort-website');
  website.innerText = resort.website;
  
  result.appendChild(name);
  result.appendChild(distance);
  result.appendChild(website);
  
  return result;
}

function displayResults(data) {
  const resorts = data;
  console.log(resorts);
  const container = document.querySelector('.results-container');
  
  resorts.map(resort => {
    const card = createResortCard(resort);
    container.appendChild(card);
  });
  
}



// create an element => document.createElement('div');
// put an element inside another => element.appendChild(anotherElement)
// add a class to an element => element.classList.add('nameOfTheClass')

  // forEach resort:
  // 1. call the render function eg: makeCard()
  // create the necessary elements to display the data eg: name, distance, website
  // put all the resort results together inside the results-container
