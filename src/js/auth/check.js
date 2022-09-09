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
  