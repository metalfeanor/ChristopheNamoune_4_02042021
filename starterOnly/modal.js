function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const copyright = document.querySelector(".copyrights");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalCloseBtn.forEach((e) => e.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//insert copyright with automatically good actual year
const year = new Date().getFullYear();
copyright.textContent = "Copyright 2014 - " + year + ", GameOn Inc.";
