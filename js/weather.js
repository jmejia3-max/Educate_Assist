const weatherKey = "0fb45abffc2909754a51e3b634739da4";

async function getWeather() {
  const weatherBox = document.getElementById("weatherBox");
  weatherBox.innerHTML = "Loading weather...";

  try {
    const city = "Chicago";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${weatherKey}`;

    const response = await fetch(url);
    const data = await response.json();

    // 🚨 IMPORTANT: handle API errors
    if (!response.ok) {
      throw new Error(data.message || "Weather API error");
    }

    const {
      name,
      main: { temp, humidity },
      weather,
      wind: { speed }
    } = data;

    weatherBox.innerHTML = `
      <h2>${name}</h2>
      <h3>${Math.round(temp)}°F</h3>
      <p><strong>Condition:</strong> ${weather[0].description}</p>
      <p><strong>Humidity:</strong> ${humidity}%</p>
      <p><strong>Wind Speed:</strong> ${speed} mph</p>
    `;

  } catch (error) {
    weatherBox.innerHTML = `
      <p>Unable to load weather data.</p>
      <small>${error.message}</small>
    `;
    console.error("Weather error:", error);
  }
}