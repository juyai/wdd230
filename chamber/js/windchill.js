// elements to display
const display = document.querySelector('#wDisplay');
const wDay = document.createElement('p');
const wForecast = document.createElement('div');
const graphic = document.createElement('section');
const figure = document.createElement('figure');
const img = document.createElement('img');
const figcaption = document.createElement('figcaption');
const temperature = document.createElement('section');
const currentTemp = document.createElement('span');
const feelsLike = document.createElement('p');
const moreDetails = document.createElement('section');
const temps = document.createElement('div');
const minT = document.createElement('span');
const maxT = document.createElement('span');
const wind = document.createElement('div');
const windS = document.createElement('p');
const windC = document.createElement('p');
const wLink = document.createElement('p');

const URL = '//api.openweathermap.org/data/2.5/weather?q=Otavalo&units=metric&appid=c44e121cd94b7a4522ef46581d75c39e';

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
let ct = "";
let wc = "";

function  displayResults(weatherData) {
    let ct = parseFloat(weatherData.main.temp).toFixed(0);
    currentTemp.innerHTML = `<strong>${ct} &deg;C</strong>`;
    
    maxT.innerHTML = `<strong>&#8896;</strong> ${weatherData.main.temp_max.toFixed(0)} &deg;C`;
    minT.innerHTML = `<strong>&#8897;</strong> ${weatherData.main.temp_min.toFixed(0)} &deg;C <br>`;
    let ws = parseFloat(weatherData.wind.speed).toFixed(1);
    feelsLike.innerHTML = `<strong>Feels Like:</strong> ${weatherData.main.feels_like.toFixed(0)} &deg;C`
    windS.innerHTML = `<strong>Wind Speed:</strong> ${ws} km/h`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description.toUpperCase();

    if (ct <= 50 && ws > 3) {
        wc = 35.74 + (0.6215 * ct) - (35.75 * Math.pow(ws, 0.16)) +(0.4275 * ct * Math.pow(ws, 0.16));
        

    } else {
        wc = "N/A";
    }  

    windC.innerHTML = `<strong>Wind Chill:</strong> ${wc}`;
    
    
    iconsrc.innerHTML = `<span id="icon-src">${iconsrc}<span>`;
    console.log(iconsrc);
    img.setAttribute('src', iconsrc);
    img.setAttribute('alt', desc);
    figcaption.textContent = desc;

  }

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const dayIndex = new Date().getDay();
const dayName = days[dayIndex];


wLink.innerHTML = `Weather Forecast Provided By: "<a href="https://OpenWeatherMap.com">OpenWeatherMap.com</a>"`;

wDay.textContent = `${dayName}`;
wDay.classList.add('wDay');
display.appendChild(wDay);
console.log(`${nombreDia}`);
display.appendChild(wForecast);
display.appendChild(wLink);
wLink.classList.add('wLink');
wForecast.classList.add('wForecast');
wForecast.appendChild(graphic);
graphic.classList.add('graphic');
graphic.appendChild(figure);
figure.appendChild(img);
figure.appendChild(figcaption);
wForecast.appendChild(temperature);
wForecast.appendChild(moreDetails);
temperature.classList.add('temperature');
temperature.appendChild(currentTemp);
temperature.appendChild(feelsLike);
wForecast.appendChild(moreDetails);
moreDetails.appendChild(temps);
moreDetails.classList.add('moreDetails');
temps.classList.add('temps')
temps.appendChild(minT);
temps.appendChild(maxT);
moreDetails.appendChild(wind);
wind.classList.add('wind');
wind.appendChild(windS);
wind.appendChild(windC);


