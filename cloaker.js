function cloaking(){
  const name = document.getElementById("name").value;
  localStorage.cloak = name;
} 
function google() {
  localStorage.cloak = "Google"
}
function canva() {
  localStorage.cloak = "Canva"
}
function clever() {
  localStorage.cloak = "Clever"
}
function schoology() {
  localStorage.cloak = "Schoology"
}
function newTab() {
  localStorage.cloak = "New Tab"
}

function changeName() {
  if (localStorage.cloak!=null) {
    const title = document.querySelector(".cloak");
  title.innerHTML = localStorage.cloak;
  } 
}

setInterval(changeName,100);
