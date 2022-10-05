import { login } from "../auth/login.mjs";

export function setLoginFormListener() {
  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
        console.log("clicked")
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      console.log('success');
      
      // calling the function to send to API 
      login(profile)
    });
  }


}