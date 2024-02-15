let log_in_button = document.getElementById("login");

import { input_validate } from "./functions.js";
log_in_button.addEventListener("click", () => {
  input_validate();
});

let new_account_button = document.getElementById("new_account");

import { registration_modal } from "./functions.js";
new_account_button.addEventListener("click", () => {
  registration_modal();
});

let x_close = document.querySelector(".x_icon");
x_close.addEventListener("click", () => {
  let main = document.querySelector(".main");
  let sign_up_container = document.querySelector(".sign_up_container");
  sign_up_container.style.display = "none";
  main.style.opacity = "unset";
});

import { check_for_female } from "./functions.js";
let female_gender_button = document.getElementById("female");
female_gender_button.addEventListener("click", () => {
  check_for_female();
});

import { check_for_male } from "./functions.js";
let male_gender_button = document.getElementById("male");
male_gender_button.addEventListener("click", () => {
  check_for_male();
});

import { check_for_custom } from "./functions.js";
let custom_gender_button = document.getElementById("custom");
custom_gender_button.addEventListener("click", () => {
  check_for_custom();
});


let sign_up = document.getElementById("sign_up");
import { registration_validation } from "./functions.js";
sign_up.addEventListener("click", () => {
  registration_validation();
});
