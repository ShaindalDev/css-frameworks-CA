/**
 * This will run when you click the log out button and remove your token from the localStorage.
 * eventListener on the logout button, and remove auth token from storage, redirect you to login page. 
 * 
 */
const logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
  localStorage.removeItem("_token");
  localStorage.removeItem("_email");
  localStorage.removeItem("profile");
  location.reload();
});
