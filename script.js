const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
const iconElement = document.getElementById("icon");

searchButton.addEventListener("click", () => {
    const city = searchInput.value;
    fetchWeather(city);
});

function fetchWeather(city) {
    // Replace with your API key and API URL
    const apiKey = "4b5eec87290772872416996d86c808cf";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${data.main.temp}°C`;
            descriptionElement.textContent = data.weather[0].description;
            iconElement.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
        });
}
