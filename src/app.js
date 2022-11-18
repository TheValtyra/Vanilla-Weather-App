function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "13cd370ea29aa99f56340dbf634b07d5";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
