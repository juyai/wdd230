// initialize display element
const visitsToDisplay = document.querySelector("#user-visits");

// get the stored value in localStorage
let lastUserVisit = localStorage.getItem('lastVisit');

// calculate milliseconds to days
let toDays = 1000 * 60 * 60 * 24;
let daysFormat = 0;

// first check to see if lastVisit is stored
if(lastUserVisit){
    let dBetween = Date.now() - lastUserVisit;
    daysFormat = (dBetween / toDays).toFixed(0);
}

if(daysFormat > 0){
    visitsToDisplay.innerHTML = `Last time user visits: ${daysFormat} days`;
} else {
    visitsToDisplay.innerHTML = 'This is the first day you visit us';
}

localStorage.setItem('lastVisit', Date.now());