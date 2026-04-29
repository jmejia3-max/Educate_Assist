const weatherKey = "0fb45abffc2909754a51e3b634739da4";

async function getWeather() {
  const city = "Chicago";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${weatherKey}`;

  const response = await fetch(url);
  const data = await response.json();

  document.getElementById("weatherBox").innerHTML = `
    <h3>${data.name}</h3>
    <p>Temperature: ${data.main.temp}°F</p>
    <p>Condition: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
  `;
}
