let apiKey = "2ffdfb8d8d8b00d2858bb969032d4f11";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=40.6552576&lon=-73.9016704&appid=${apiKey}&units=metric`;
  
function showWeather(response, search) {
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `⛅${temperature}°C`;
  
}
axios.get(apiUrl).then(showWeather);