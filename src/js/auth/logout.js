const logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
  localStorage.removeItem("_token");
  location.reload();
});
