
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h ";

        if (data.weather[0].main == "Clouds") {
            // weatherIcon.src = "images/clouds.png";
            weatherIcon.src = "C:\Users\rhars\OneDrive\Desktop\Projects\images\clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            // weatherIcon.src = "images/clear.png";
            weatherIcon.src = "C:\Users\rhars\OneDrive\Desktop\Projects\images\clear.png";
        }
        else if (data.weather[0].main == "rain") {
            // weatherIcon.src = "images/rain.png";
            weatherIcon.src = "C:\Users\rhars\OneDrive\Desktop\Projects\images\rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            // weatherIcon.src = "images/drizzle.png";
            weatherIcon.src = "C:\Users\rhars\OneDrive\Desktop\Projects\images\drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            // weatherIcon.src = "images/mist.png";
            weatherIcon.src = "C:\Users\rhars\OneDrive\Desktop\Projects\images\mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value);
})