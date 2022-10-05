import { API_SOCIAL_URL } from "../api/constants.mjs";

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (event) => {
  console.log('test')
  event.preventDefault();
  const userName = registerForm.userName.value;
  const email = registerForm.userEmail.value;
  const password = registerForm.userPassword.value;
  const banner = registerForm.banner.value;
  const avatar = registerForm.avatar.value
  try {
    fetch(`${API_SOCIAL_URL}/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        name: userName,
        email: email,
        password: password,
        banner: banner,
        avatar: avatar
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // window.localStorage.setItem("_token", data.accessToken);
        location.href = "/pages/profile.html";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (error) {
    console.log(error);
  }
});



// const v1baseUrl = "https://nf-api.onrender.com/api/v1";
// const registerURL = "/social/auth/register"






// *****Manuel registration of a profile ******
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

//     localStorage.setItem('token', accessToken);
