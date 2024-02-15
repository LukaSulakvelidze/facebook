export function input_validate() {
  let headline_text = document.getElementById("headline_text");
  let email_for_login = document.getElementById("email_for_login");
  let label_for_email = document.getElementById("label_for_email");
  let password_for_login = document.getElementById("password_for_login");
  let label_for_password = document.getElementById("label_for_password");
  let new_account = document.getElementById("new_account");
  let celebrity = document.getElementById("celebrity");
  let email_from_storage = localStorage.getItem("email");
  let password_from_storage = localStorage.getItem("password");

  if (
    email_for_login.value == "" ||
    email_for_login.value != email_from_storage
  ) {
    headline_text.style.display = "none";
    email_for_login.style.border = " solid 1px #f02849";
    email_for_login.style.background =
      "url(./Assets/triangle-exclamation-solid.svg) no-repeat top 50% right 10px";
    email_for_login.style.backgroundSize = "25px";
    new_account.style.display = "none";
    celebrity.style.display = "none";
    label_for_email.style.display = "block";
    console.log("test");
  } else if (
    password_for_login.value == "" ||
    password_for_login.value != password_from_storage
  ) {
    email_for_login.style.border = " solid 1px #dddfe2";
    email_for_login.style.background = "unset";
    label_for_email.style.display = "none";
    label_for_password.style.display = "block";
    label_for_email.style.background =
      "url(./Assets/triangle-exclamation-solid.svg) no-repeat top 20% right 10px";
  } else if (
    email_for_login.value === email_from_storage &&
    password_for_login.value === password_from_storage
  ) {
    window.location.href = "Feed_Page/feed.html";
  }
}

export function registration_modal() {
  let main = document.querySelector(".main");
  let sign_up_container = document.querySelector(".sign_up_container");
  sign_up_container.style.display = "flex";
  main.style.opacity = "0.2";
}

export function registration_validation() {
  let firstName_reg = document.getElementById("firstName_reg");
  if (firstName_reg.value === "") {
    firstName_reg.style.border = "solid 1px #f02849";
    firstName_reg.style.background =
      "#f5f6f7 url(./Assets/circle-exclamation-solid.svg) no-repeat  top 50% right 10px";
  } else {
    firstName_reg.style.border = "solid 1px #ccd0d5";
    firstName_reg.style.background = "unset";
    firstName_reg.style.backgroundColor = "#f5f6f7";
    localStorage.setItem("firstname", firstName_reg.value);
  }

  let lastname_reg = document.getElementById("lastname_reg");

  if (lastname_reg.value === "") {
    lastname_reg.style.border = "solid 1px #f02849";
    lastname_reg.style.background =
      "#f5f6f7 url(./Assets/circle-exclamation-solid.svg) no-repeat  top 50% right 10px";
  } else {
    lastname_reg.style.border = "solid 1px #ccd0d5";
    lastname_reg.style.background = "unset";
    lastname_reg.style.backgroundColor = "#f5f6f7";
    localStorage.setItem("lastname", lastname_reg.value);
  }

  let email_reg = document.getElementById("email_reg");
  let mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!mailformat.test(email_reg.value)) {
    email_reg.style.border = "solid 1px #f02849";
    email_reg.style.background =
      "#f5f6f7 url(./Assets/circle-exclamation-solid.svg) no-repeat  top 50% right 10px";
  } else if (mailformat.test(email_reg.value)) {
    email_reg.style.border = "solid 1px #ccd0d5";
    email_reg.style.background = "unset";
    email_reg.style.backgroundColor = "#f5f6f7";
    localStorage.setItem("email", email_reg.value.toLowerCase());
  }

  let password_reg = document.getElementById("password_reg");

  if (
    password_reg.value === "" ||
    password_reg.value.length > 8 ||
    password_reg.value.length < 22
  ) {
    password_reg.value = ""
    password_reg.style.border = "solid 1px #f02849";
    password_reg.style.background =
      "#f5f6f7 url(./Assets/circle-exclamation-solid.svg) no-repeat  top 50% right 10px";
  } else {
    password_reg.style.border = "solid 1px #ccd0d5";
    password_reg.style.background = "unset";
    password_reg.style.backgroundColor = "#f5f6f7";
    localStorage.setItem("password", password_reg.value);
  }

  let about_text1 = document.getElementById("about_text1");
  let select_month = document.getElementById("month");
  let select_day = document.getElementById("day");
  let select_year = document.getElementById("year");
  if (
    select_month.value == 1 &&
    select_day.value == 1 &&
    select_year.value == 2024
  ) {
    about_text1.style.background =
      "url(./Assets/circle-exclamation-solid.svg) no-repeat  top 50% right 11px";
    select_month.style.border = "solid 1px #f02849";
    select_day.style.border = "solid 1px #f02849";
    select_year.style.border = "solid 1px #f02849";
  } else {
    about_text1.style.background = "unset";
    select_month.style.border = "solid 1px #ccd0d5";
    select_day.style.border = "solid 1px #ccd0d5";
    select_year.style.border = "solid 1px #ccd0d5";
  }

  if (select_year.value > 2010) {
    select_year.style.border = "solid 1px #f02849";
  } else {
    select_year.style.border = "solid 1px #ccd0d5";
  }

  let about_text2 = document.getElementById("about_text2");
  let female_gender_button = document.getElementById("female");
  let femail_input = document.getElementById("female_input");
  let male_gender_button = document.getElementById("male");
  let male_input = document.getElementById("male_input");
  let custom_gender_button = document.getElementById("custom");
  let custom_input = document.getElementById("custom_input");
  if (
    femail_input.checked == false &&
    male_input.checked == false &&
    custom_input.checked == false
  ) {
    about_text2.style.background =
      "url(./Assets/circle-exclamation-solid.svg) no-repeat  top 50% right 11px";
    female_gender_button.style.border = "1px solid #f02849";
    male_gender_button.style.border = "1px solid #f02849";
    custom_gender_button.style.border = "1px solid #f02849";
  } else {
    about_text2.style.background = "none";
    female_gender_button.style.border = "1px solid #ccd0d5";
    male_gender_button.style.border = "1px solid #ccd0d5";
    custom_gender_button.style.border = "1px solid #ccd0d5";
  }
  if (
    firstName_reg.value !== "" &&
    lastname_reg.value !== "" &&
    mailformat.test(email_reg.value) &&
    password_reg.value !== "" &&
    password_reg.value.length > 8 &&
    password_reg.value.length < 22
  ) {
    if (
      femail_input.checked === true ||
      male_input.checked === true ||
      custom_input.checked === true
    ) {
      let main = document.querySelector(".main");
      let sign_up_container = document.querySelector(".sign_up_container");
      sign_up_container.style.display = "none";
      main.style.opacity = "1";
      firstName_reg.value = "";
      lastname_reg.value = "";
      email_reg.value = "";
      password_reg.value = "";
      select_month.value = 1;
      select_day.value = 1;
      select_year.value = 2024;
      femail_input.checked = false;
      male_input.checked = false;
      custom_input.checked = false;
    }
  } else {
    console.log("");
  }
}

export function check_for_female() {
  let femail_input = document.getElementById("female_input");
  femail_input.checked = true;
}

export function check_for_male() {
  let male_input = document.getElementById("male_input");
  male_input.checked = true;
}

export function check_for_custom() {
  let custom_input = document.getElementById("custom_input");
  custom_input.checked = true;
}

// Feed Part
// getting user's name/lastname
export function get_user_name() {
  let username_shortcut = document.getElementById("username");
  let username_post_input = document.getElementById("post_input_user");
  let modal_user_name = document.getElementById("modal_user_name");
  let user_firstname = localStorage.getItem("firstname");
  let user_lastname = localStorage.getItem("lastname");
  username_shortcut.innerHTML = `${user_firstname + " " + user_lastname}`;
  username_post_input.innerHTML = `${user_firstname + "?"}`;
  modal_user_name.innerHTML = `${user_firstname + " " + user_lastname}`;
}

// Change cursor view and abbility on post add button when text is written in textare.
export function change_cursor_on_textArea() {
  let textarea = document.querySelector(".textarea");
  let post_button = document.getElementById("post_button");
  if (textarea.value.trim() === "") {
    post_button.style.cursor = "not-allowed";
    post_button.style.color = "grey";
    post_button.style.backgroundColor = "#4e4f50";
    post_button.disabled = true;
  } else {
    post_button.style.cursor = "pointer";
    post_button.style.color = "white";
    post_button.style.backgroundColor = "#0866ff";
    post_button.disabled = false;
  }
}

// Function to calculate time elapsed since a post was made
function timeSincePost(postTime) {
  const currentTime = new Date();
  const elapsedTime = currentTime - postTime;
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;

  if (elapsedTime < minute) {
    return "Just now";
  } else if (elapsedTime < hour) {
    return Math.floor(elapsedTime / minute) + " minutes ago";
  } else if (elapsedTime < day) {
    return Math.floor(elapsedTime / hour) + " hours ago";
  } else if (elapsedTime < month) {
    return Math.floor(elapsedTime / day) + " days ago";
  } else if (elapsedTime < year) {
    return Math.floor(elapsedTime / month) + " months ago";
  } else {
    return Math.floor(elapsedTime / year) + " years ago";
  }
}

// Add Posts
export function add_post() {
  let time = new Date();
  let user_firstname = localStorage.getItem("firstname");
  let user_lastname = localStorage.getItem("lastname");
  let textarea = document.querySelector(".textarea");
  let users_posts_container = document.querySelector(".users_posts_container");
  let new_post = document.createElement("div");
  new_post.classList.add("users_posts"); // Add class for styling
  users_posts_container.prepend(new_post); // Add post at the beginning of the list
  new_post.innerHTML = `
      <div class="head_part">
          <div class="user_part">
              <img src="./Assets/user-solid.svg" alt="Profile Picture" />
              <div class="user_info">
                  <h3>${user_firstname + " " + user_lastname}</h3>
                  <span class="post_time">${timeSincePost(time)}</span>
              </div>
          </div>
          <button class="post_delete">X</button>
      </div>
      <div class="post_part">
          <span class="post_text">${textarea.value}</span>
      </div>
  `;

  // Save post to local storage
  savePostToLocalStorage({
    id: time.getTime(), // Using timestamp as ID for the post
    user: user_firstname + " " + user_lastname,
    time: time.toString(),
    content: textarea.value,
  });

  // Add event listener to delete button
  const delete_button = new_post.querySelector(".post_delete");
  delete_button.addEventListener("click", () => {
    new_post.remove();
    removePostFromLocalStorage(new_post); // Remove post from local storage
  });
}

// Function to save post to local storage
function savePostToLocalStorage(post) {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.unshift(post); // Add post to the beginning of the array
  localStorage.setItem("posts", JSON.stringify(posts));
}

// Function to remove post from local storage
function removePostFromLocalStorage(postElement) {
  let postId = postElement.getAttribute("data-id"); // Get post ID
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts = posts.filter((post) => post.id != postId); // Remove post with matching ID
  localStorage.setItem("posts", JSON.stringify(posts));
}

// Load posts from local storage on page load
window.addEventListener("load", () => {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.forEach((post) => {
    let users_posts_container = document.querySelector(
      ".users_posts_container"
    );
    let new_post = document.createElement("div");
    new_post.classList.add("users_posts"); // Add class for styling
    new_post.setAttribute("data-id", post.id); // Set post ID as a data attribute
    users_posts_container.prepend(new_post); // Add post at the beginning of the list
    new_post.innerHTML = `
          <div class="head_part">
              <div class="user_part">
                  <img src="./Assets/user-solid.svg" alt="Profile Picture" />
                  <div class="user_info">
                      <h3>${post.user}</h3>
                      <span class="post_time">${timeSincePost(
                        new Date(post.time)
                      )}</span>
                  </div>
              </div>
              <button class="post_delete">X</button>
          </div>
          <div class="post_part">
              <span class="post_text">${post.content}</span>
          </div>
      `;

    // Add event listener to delete button
    const delete_button = new_post.querySelector(".post_delete");
    delete_button.addEventListener("click", () => {
      new_post.remove();
      removePostFromLocalStorage(new_post); // Remove post from local storage
    });
  });
});
