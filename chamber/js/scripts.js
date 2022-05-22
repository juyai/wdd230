function toggleMenu(){
  document.getElementById("Nav").classList.toggle("open")
  document.getElementById("Btn").classList.toggle("open");
}
const x = document.getElementById("Btn")
x.onclick = toggleMenu;

//Header Current Date
const dias = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const numeroDia = new Date().getDay();
const nombreDia = dias[numeroDia];
const year = new Date().getFullYear();
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
const month = monthNames[new Date().getMonth()]
const day = new Date().getDate()

//console.log(`${nombreDia}, ${day} ${month} ${year}`)

const date = document.getElementById("currentDate");

date.innerHTML = `${nombreDia}, ${day} ${month} ${year}`

//footer
const footerDate = new Date();

document.querySelector("#currentYear").innerHTML = year;
document.getElementById("lastUpdated").innerHTML = document.lastModified;

const message = document.getElementById('message');
if (numeroDia == 1 || numeroDia ==2) {
  message.style.display = "block";
} else {
  message.style.display = "none";
};



