const citiesContainer = document.getElementById('cities');

fetch('https://api.npoint.io/7bbd3a59c401f616bb89')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(city => {
      const cityDiv = document.createElement('div');
      cityDiv.classList.add('city');

      const nameH2 = document.createElement('h2');
      nameH2.textContent = city.name;
      cityDiv.appendChild(nameH2);

      const stateP = document.createElement('p');
      stateP.textContent = `State: ${city.state}`;
      cityDiv.appendChild(stateP);

      const populationP = document.createElement('p');
      populationP.textContent = `Population: ${city.population}`;
      cityDiv.appendChild(populationP);

      citiesContainer.appendChild(cityDiv);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });