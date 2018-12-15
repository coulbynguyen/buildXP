var entrepreneurBtn = document.getElementById("for-entrepreneurs");
var entrepreneurContainer = document.getElementById("entrepreneur-container");

var developerBtn = document.getElementById("for-developers");
var developerContainer = document.getElementById("developer-container");

entrepreneurBtn.addEventListener("click", entrepreneurFn);
developerBtn.addEventListener("click", developerFn);
function entrepreneurFn(){
  entrepreneurContainer.classList.remove("hidden");
  entrepreneurBtn.classList.add("active");
  developerContainer.classList.add("hidden");
  developerBtn.classList.remove("active");
}

function developerFn(){
  entrepreneurContainer.classList.add("hidden");
  entrepreneurBtn.classList.remove("active");
  developerContainer.classList.remove("hidden");
  developerBtn.classList.add("active");
}
