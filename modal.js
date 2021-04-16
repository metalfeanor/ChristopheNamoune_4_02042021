function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//not possible to select birthdate in future
const date = new Date().toISOString().split("T")[0];
document.getElementsByName("birthdate")[0].setAttribute("max", date);

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBody = document.querySelector(".modal-body");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const dataSendCloseBtn = document.querySelector(".btn-close");
//const formData = document.querySelectorAll(".formData");
const copyright = document.querySelector(".copyrights");
const form = document.getElementById("form");
const formTransmitted = document.getElementById("confirmation");
const locationInputData = document.getElementsByName("location");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalCloseBtn.addEventListener("click", closeModal);
dataSendCloseBtn.addEventListener("click", closeModal);
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
  //reset modal when closing after data sended
  if (formTransmitted.style.display === "flex") {
    form.reset();
    modalBody.style.display = "block";
    dataSendCloseBtn.style.display = "none";
    formTransmitted.style.display = "none";
  }
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
  const radioIcon = document.querySelectorAll(
    "label.checkbox-label > span.checkbox-icon"
  );
  const checkboxIcon = document.querySelector(
    "label.checkbox2-label > span.checkbox-icon"
  );

  if (!data.location) {
    //error message
    radioError.innerHTML = "Merci de bien vouloir sélectionner une ville !";
    //change borderColor to red when no radio selected
    radioIcon.forEach((item) => {
      item.style.borderColor = "red";
    });
  }
  if (data.location) {
    //remove error message
    radioError.innerHTML = "";
    //remove red border to original color
    radioIcon.forEach((item) => {
      item.style.borderColor = "#279e7a";
    });
  }
  if (!data.checkbox1) {
    //add red border to checkbox
    checkboxIcon.style.border = "2px solid red";
    //error message
    checkboxError.innerHTML = "Merci d'accepter les conditions d'utilisation !";
  }
  if (data.checkbox1) {
    //remove border to checkbox
    checkboxIcon.style.border = "";
    //remove error message
    checkboxError.innerHTML = "";
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
