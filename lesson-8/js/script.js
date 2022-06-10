const date = new Date();

let today = date.getDay(); 
let month = (date.getMonth()+1).toString().padStart(2, '0');
let year = date.getFullYear();

let currentDate = `${today}.${month}.${year}`; 
let compileByText = `Compiled ${currentDate} by Yurinii Fuentes`;
document.querySelector("#compiledBy").innerHTML = compileByText;