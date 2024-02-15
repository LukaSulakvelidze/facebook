// usernames
import { get_user_name } from "./functions.js";
get_user_name();

// Modal Window Open
let post_modal_open_input = document.getElementById("post_modal_open_input");
let post_modal_window = document.querySelector(".post_modal_window");
let main = document.getElementsByTagName("main")[0];
post_modal_open_input.addEventListener("click", () => {
  post_modal_window.style.display = "block";
  main.style.opacity = ".2";
});

// Modal Window Close
let modal_close = document.getElementById("modal_close");
modal_close.addEventListener("click", () => {
  post_modal_window.style.display = "none";
  main.style.opacity = "1";
});

// Add_post button abbility/cursor changer
import { change_cursor_on_textArea } from "./functions.js";
let textarea = document.querySelector(".textarea");
textarea.addEventListener("input", () => {
  change_cursor_on_textArea();
  localStorage.setItem("user_post", textarea.value);
});

// Now I'm going to add a feature that will allow you to add and delete posts
import { add_post } from "./functions.js";
let post_button = document.getElementById("post_button");
post_button.addEventListener("click", () => {
  if (textarea.value != "") {
    post_modal_window.style.display = "none";
    main.style.opacity = "1";
    add_post();
  }
  textarea.value = "";
  change_cursor_on_textArea();
});
