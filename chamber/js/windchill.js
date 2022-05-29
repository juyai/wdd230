let t = parseFloat(document.querySelector('#t').textContent);
const s = parseFloat(document.querySelector('#s').textContent);

//console.log(`${t}: which is a ${typeof(t)} and temperature`);
//console.log(`${s}: which is a ${typeof(s)} and wind speed`);

let temp = t * 9/5 + 32;
let wSpeed = s * 0.6214;
let windChill = ''

if (temp <= 50 && wSpeed > 3) {
    let wc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wSpeed, 0.16)) +(0.4275 * temp * Math.pow(wSpeed, 0.16));
    windChill = wc.toFixed(2);
} else {
    windChill = "N/A";
}  

document.querySelector("#wind-chill").innerHTML = windChill;
