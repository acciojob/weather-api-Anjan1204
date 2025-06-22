function getWeather() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=cloud_cover";

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    })
    .then(data => {
      const cloudCover = data.current.cloud_cover;
      document.getElementById("weatherData").textContent =
        `Current weather in Berlin: Cloud Cover - ${cloudCover}%`;
    })
    .catch(error => {
      console.error("Fetch error:", error);
      document.getElementById("weatherData").textContent = "Unable to fetch weather data.";
    });
}
