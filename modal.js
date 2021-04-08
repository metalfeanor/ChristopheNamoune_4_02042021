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
const modalBody = document.querySelector(".modal-body");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelectorAll(".close");
const dataSendCloseBtn = document.querySelector(".btn-close");
//const formData = document.querySelectorAll(".formData");
const copyright = document.querySelector(".copyrights");
const form = document.getElementById("form");
const formTransmitted = document.getElementById("confirmation");
const locationInputData = document.getElementsByName("location");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalCloseBtn.forEach((e) => e.addEventListener("click", closeModal));
dataSendCloseBtn.addEventListener("click", closeModal);
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

//checking inputs
function checkInputs() {
  const formData = new FormData(form);
  const entries = formData.entries();
  const data = Object.fromEntries(entries);
  console.log(data);

  //DOM element for error message
  const radioError = document.querySelector(".radio-error");
  const checkboxError = document.querySelector(".checkbox-error");

  //select parent element to radio input
  const parentRadioElt = document.getElementById("location1").parentElement;

  //select parent element to checkbox input
  const parentCheckboxElt = document.getElementById("checkbox1").parentElement;

  if (!data.location) {
    parentRadioElt.classList.add("border-error");
    //error message
    radioError.innerHTML = "Merci de bien vouloir sélectionner une ville !";
  }
  if (data.location) {
    if (parentRadioElt.classList.contains("border-error")) {
      //remove radiobox class
      parentRadioElt.classList.remove("border-error");
      //remove error message
      radioError.innerHTML = "";
    }
  }
  if (!data.checkbox1) {
    parentCheckboxElt.classList.add("border-error");
    //error message
    checkboxError.innerHTML = "Merci d'accepter les conditions d'utilisation !";
  }
  if (data.checkbox1) {
    if (parentCheckboxElt.classList.contains("border-error")) {
      //remove radiobox class
      parentCheckboxElt.classList.remove("border-error");
      //remove error message
      checkboxError.innerHTML = "";
    }
  }

  if (data.hasOwnProperty("location") && data.hasOwnProperty("checkbox1")) {
    return JSON.stringify(data);
  }
}

function validate(e) {
  e.preventDefault();
  checkInputs();
  if (checkInputs()) {
    modalBody.style.display = "none";
    dataSendCloseBtn.style.display = "block";
    formTransmitted.style.display = "flex";
    return true;
  } else {
    return false;
  }
}
