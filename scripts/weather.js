const apiKey = "9eafc49a3278c38175a744a13411da1a";
const city = "Kampala";
const units = "metric"; 

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

fetch(weatherUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch weather data.");
    }
    return response.json();
  })
  .then((data) => {
    const temperature = data.main.temp.toFixed(1);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.getElementById("weather-temp").textContent = `${temperature} °C`;
    document.getElementById("weather-desc").textContent = description;

    const weatherIcon = document.getElementById("weather-icon");
    weatherIcon.setAttribute("src", iconUrl);
    weatherIcon.setAttribute("alt", description);

    document.getElementById("weather-error").textContent = ""; // Clear error if previously shown
  })
  .catch((error) => {
    console.error("Weather API error:", error);
    document.getElementById("weather-error").textContent = "Weather data unavailable.";
    document.getElementById("weather-icon").style.display = "none";
  });