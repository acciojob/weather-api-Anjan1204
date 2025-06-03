document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

function getWeather() {
  const apiKey = "321d4e5ef1bd0902f1ff8f2f145a6e6e";
  const city = "London";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      const weather = data.weather[0].main;
      document.getElementById("weatherData").textContent = `Current weather in ${city}: ${weather}`;
    })
    .catch(error => {
      console.error("Error fetching weather:", error);
      document.getElementById("weatherData").textContent = `❌ Failed to load weather data: ${error.message}`;
    });
}
