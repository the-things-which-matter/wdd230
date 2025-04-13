// scripts/weather.js
const weatherContainer = document.getElementById("weather");
const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
const lat = 0.3136;
const lon = 32.5811;
const units = "metric";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const temp = Math.round(data.main.temp);
    const desc = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    weatherContainer.innerHTML = `
      <p><strong>Current Weather:</strong></p>
      <img src="${iconUrl}" alt="${desc}">
      <p>${temp}°C - ${desc.charAt(0).toUpperCase() + desc.slice(1)}</p>
    `;
  })
  .catch(error => {
    console.error("Error fetching weather:", error);
    weatherContainer.innerHTML = `<p>Unable to load weather data.</p>`;
  });