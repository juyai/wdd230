const dateTime = document.querySelector("#dateTime");
let date = new Date();
let loadedDateTime = `on ${date.getDay()}/${date.getMonth()+1}/${date.getFullYear} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
dateTime.value = loadedDateTime;

console.log(`$received {loadedDateTime}`);