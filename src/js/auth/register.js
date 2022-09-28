// Manuel registration of a profile 
// fetch('https://nf-api.onrender.com/api/v1/social/auth/register', {
// method: 'POST',
// body: JSON.stringify({
//     name: "Shaindal",
//     email: "RobJoh57981@stud.noroff.no",
//     password: "Ina130509"

// }),
// headers: {
//     'Content-type': 'application/json; charset=UTF-8',
// },
// })
// .then((response) => response.json())
// .then((json) => console.log(json));

//     localStorage.setItem('token', acessToken);

const v1baseUrl = "https://nf-api.onrender.com/api/v1";
const registerURL = "/social/auth/register"
const registerForm = document.querySelector("#registerForm");
const registerButton = document.getElementById("register-form-submit");

registerButton.addEventListener("click", (e) => {
  const userName = registerForm.userName.value;
  const email = registerForm.userEmail.value;
  const password = registerForm.userPassword.value;
  try {
    fetch(`${v1baseUrl}/social/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        name: userName,
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
        location.href = "/pages/profile.html";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (error) {
    console.log(error);
  }
});
