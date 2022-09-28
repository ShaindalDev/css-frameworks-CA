/**
 * Function to check if you are allready logged in or not. 
 * If logged in and Auth token is valid, you are redirected to your profile page, 
 * If not logged and Auth token is invalid, you are redirected to login screen.
 * When check see you are logged in and Auth token is valid, login button is replaced with logout button.
 */
if (!localStorage.getItem("_token")) {
    location.href = "/pages/login.html"
  };
  if (localStorage.getItem("_token")) {
    let link = document.getElementById("loginLink")
    link.style.display="none";
  }else {
    let link = document.getElementById("logoutLink")
    link.style.display="none";
  };
  