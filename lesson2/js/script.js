const date = new Date();
const currentYear = date.getFullYear();

document.querySelector("#currentYear").innerHTML = currentYear;
document.getElementById("lastUpdated").innerHTML = document.lastModified;