function getWeather() {
    const apiKey = 'cd9322165aa27050eeb0803c4aff16cb'; // Replace with your OpenWeatherMap API key
    const cityInput = document.getElementById('city-input').value;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Unable to fetch weather data. Please try again later.');
        });
}

function displayWeather(data) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const windSpeed = data.wind.speed;

    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const windElement = document.getElementById('wind');
    const weatherDetailsElement = document.getElementById('weather-details');

    temperatureElement.innerText = `Temperature: ${temperature}°C`;
    descriptionElement.innerText = `Description: ${description}`;
    windElement.innerText = `Wind: ${windSpeed} m/s`;

    weatherDetailsElement.style.display = 'block';
}
