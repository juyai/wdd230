const lat =  19
const lon =  -99
const key = 'c44e121cd94b7a4522ef46581d75c39e';
const part = 'minutely,hourly';
const URL = `//api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

async function apiFetch() {
    try {
        const response = await fetch(URL);
        if (response.ok) {
            const data =  await response.json();
            display(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
    }
}

apiFetch();

function display(data) {
    wDescription.textContent = data.current.weather[0].description.toUpperCase();
    temperature.innerHTML = `${data.current.temp.toFixed(0)} &deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;
    wIcon.setAttribute('src', iconsrc);
    wIcon.setAttribute('alt', wDescription);
    wHumidity.innerHTML = `<strong>Humidity:</strong><br>${data.current.humidity}`;
    
    upcoming1Temp.innerHTML = `${data.daily[0].temp.day.toFixed(0)} &deg;C`;
    const upcoming1IconSrc = `https://openweathermap.org/img/w/${data.daily[0].weather[0].icon}.png`;
    upcoming1Icon.setAttribute('src', upcoming1IconSrc);
    const upcoming1Desc = `${data.daily[0].weather[0].description}`
    upcoming1Icon.setAttribute('alt', upcoming1Desc);

    upcoming2Temp.innerHTML = `${data.daily[1].temp.day.toFixed(0)} &deg;C`;
    const upcoming2IconSrc = `https://openweathermap.org/img/w/${data.daily[1].weather[0].icon}.png`;
    upcoming2Icon.setAttribute('src', upcoming2IconSrc);
    const upcoming2Desc = `${data.daily[1].weather[0].description}`
    upcoming2Icon.setAttribute('alt', upcoming2Desc);

    upcoming3Temp.innerHTML = `${data.daily[2].temp.day.toFixed(0)} &deg;C`;
    const upcoming3IconSrc = `https://openweathermap.org/img/w/${data.daily[2].weather[0].icon}.png`;
    upcoming3Icon.setAttribute('src', upcoming3IconSrc);
    const upcoming3Desc = `${data.daily[2].weather[0].description}`
    upcoming3Icon.setAttribute('alt', upcoming3Desc);

    const next1 = dayIndex + 1;
    const next1name = days[next1];
    upcoming1Day.textContent = `${next1name}`;

    const next2 = dayIndex + 2;
    const next2name = days[next2];
    upcoming2Day.textContent = `${next2name}`;

    const next3 = dayIndex + 3;
    const next3name = days[next3];
    upcoming3Day.textContent = `${next3name}`;
}

const wContainer = document.querySelector('#wContainer');

const wDescription = document.createElement('h2');
wContainer.appendChild(wDescription);

const temperature = document.createElement('h2');
wContainer.appendChild(temperature);

const wIcon = document.createElement('img');
wContainer.appendChild(wIcon);

const wHumidity = document.createElement('p');
wContainer.appendChild(wHumidity);

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
  
const dayIndex = new Date().getDay();
const dayName = days[dayIndex];
const year = new Date().getFullYear();
const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
const month = monthNames[new Date().getMonth()];
const day = new Date().getDate();
const wDate = document.createElement('p');
wDate.innerHTML = `${dayName} | ${day} ${month} ${year}`;
wContainer.appendChild(wDate);

const wUpcoming = document.createElement('section');
wContainer.appendChild(wUpcoming);

const wUpcomingHeader = document.createElement('h2');
wUpcomingHeader.textContent = 'UPCOMING';
wUpcoming.appendChild(wUpcomingHeader);

const upcoming1 = document.createElement('div');
wUpcoming.appendChild(upcoming1);
const upcoming1Temp = document.createElement('p');
upcoming1.appendChild(upcoming1Temp);
const upcoming1Icon = document.createElement('img');
upcoming1.appendChild(upcoming1Icon);
const upcoming1Day = document.createElement('h3');
upcoming1.appendChild(upcoming1Day);

const upcoming2 = document.createElement('div');
wUpcoming.appendChild(upcoming2);
const upcoming2Temp = document.createElement('p');
upcoming2.appendChild(upcoming2Temp);
const upcoming2Icon = document.createElement('img');
upcoming2.appendChild(upcoming2Icon);
const upcoming2Day = document.createElement('h3');
upcoming2.appendChild(upcoming2Day);

const upcoming3 = document.createElement('div');
wUpcoming.appendChild(upcoming3);
const upcoming3Temp = document.createElement('p');
upcoming3.appendChild(upcoming3Temp);
const upcoming3Icon = document.createElement('img');
upcoming3.appendChild(upcoming3Icon);
const upcoming3Day = document.createElement('h3');
upcoming3.appendChild(upcoming3Day);


