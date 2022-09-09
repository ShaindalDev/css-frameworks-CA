const baseUrl = "https://nf-api.onrender.com/api/v1/social";
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (error) {
    console.log(error);
  }
});
