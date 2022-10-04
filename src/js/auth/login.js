/**
 * Login function with consts for login form and eventListener for the login button. 
 */
const baseUrl = "https://nf-api.onrender.com/api/v1/social";
const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("login-form-submit");
/**
 * EventListener for when the login button is clicked, sets auth token and email address for use when viewing your own posts on profile page.
 * When credentials are valid redirects you to profile page. 
 */
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  try {
    fetch("https://nf-api.onrender.com/api/v1/social/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.localStorage.setItem("_token", data.accessToken);
        window.localStorage.setItem("_email", data.email);
        location.href = "/pages/profile.html"
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (error) {
    console.log(error);
  }
});

if (localStorage.getItem("_token")) {
  location.href = "/pages/profile.html"
};

let link = document.getElementById("logoutLink")
    link.style.display="none";