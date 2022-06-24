// select all of the HTML elements that will need to be modified/manipulated
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc =document.querySelector('figcaption');

const maxT =document.querySelector('#maxT');
const minT =document.querySelector('#minT');
const feelsLike =document.querySelector('#feelsLike');



const URL = '//api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=c44e121cd94b7a4522ef46581d75c39e'

async function apiFetch() {
    try {
        const response = await fetch(URL);
        if (response.ok) {
            const data =  await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    
    maxT.textContent = weatherData.main.temp_max.toFixed(0)
    minT.textContent = weatherData.main.temp_min.toFixed(0)
    feelsLike.textContent = weatherData.main.feels_like.toFixed(0)

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description.toUpperCase();
    
    
    iconsrc.innerHTML = `<span id="icon-src">${iconsrc}<span>`;
    console.log(iconsrc);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

  }

