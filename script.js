async function getWeather() {
  const apiKey = "a6d365b4dff51128df271a6957c23b6e";
  const city = "London";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${response.status} - ${errorData.message}`);
    }

    const data = await response.json();
    const weatherDescription = data.weather[0].main;

    document.getElementById("weatherData").textContent = 
      `Current weather in ${city}: ${weatherDescription}`;
  } catch (error) {
    document.getElementById("weatherData").textContent = 
      "Error fetching weather data.";
    console.error("Fetch error:", error.message);
  }
}
