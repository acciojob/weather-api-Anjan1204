document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const API_KEY = "e467712b257e418838be97cc881a71de"; // Match the test case
  const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherMain = data.weather[0].main;
      document.getElementById("weatherData").textContent = `Current weather in London: ${weatherMain}`;
    })
    .catch(error => {
      console.error("Error fetching weather:", error);
      document.getElementById("weatherData").textContent = "Failed to fetch weather.";
    });
});
