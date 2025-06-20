async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "e893a944ca594780d3731ba40bafb34f"; // replace with your own key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod === "404") {
      document.getElementById("result").innerText = " City not found.";
    } else {
      document.getElementById("result").innerHTML = `
        📍 <strong>${data.name}</strong><br>
        🌡️ Temperature: ${data.main.temp}°C<br>
        ☁️ Weather: ${data.weather[0].main}
      `;
    }
  } catch (error) {
    document.getElementById("result").innerText = " Error fetching data.";
  }
}
