document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const apiKey = "a6d365b4dff51128df271a6957c23b6e"; // ✅ Your working API key
  const city = "London";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      document.getElementById("weatherData").innerText = 
        `🌤️ Current weather in ${city}: ${weather}, ${temp}°C`;
    })
    .catch(error => {
      document.getElementById("weatherData").innerText = 
        `❌ Failed to load weather data: ${error.message}`;
    });
});
