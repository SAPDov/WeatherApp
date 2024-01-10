async function getWeather() {
  if (!window.config || !window.config.apiKey) {
    throw new Error("API key not defined");
  }
  try {
    const cityValue = document.getElementById("cityInput").value;
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${window.config.apiKey}&q=${cityValue}&aqi=no`;
    const response = await fetch(apiUrl);
    const weatherData = await response.json();

    const weatherResults = document.getElementById("weatherResult");
    weatherResults.innerHTML = `<img src="${weatherData.current.condition.icon}"></img>
    <p>Temperature: ${weatherData.current.temp_c}°C</p>`;
  } catch (error) {
    const weatherResults = document.getElementById("weatherResult");
    weatherResults.innerHTML = `<p> An Error occurred: ${error}</p>`;
  }
}
