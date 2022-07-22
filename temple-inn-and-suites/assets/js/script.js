//hamburger button
function toggleMenu(){
  document.querySelector("#btn").classList.toggle("open");
  document.querySelector("#menu").classList.toggle("open");    
}

const x = document.querySelector("#btn");
x.onclick = toggleMenu;

function toggleSubMenu(){
  document.querySelector("#submenu").classList.toggle("display");    
}

const y = document.querySelector("#dropdownMenu");
y.onclick = toggleSubMenu;

//footer
const footeryear = new Date().getFullYear();

document.querySelector("#insertion1").innerHTML = `&copy; ${footeryear}`;
document.querySelector("#insertion2").innerHTML = document.lastModified;

