//THIS IS NOT IN USE YET, it's under construction
import { getProfile, updateProfile } from "../api/profile/index.mjs";
import { profile } from "../storage/storage.mjs";
/**
 * This is where everything is handled when a user want's to update their user profile. 
 * The update user form is grabbed here and put's the updated profile on the API. 
 */
export async function setUpdateProfileListener() {
  const form = document.querySelector("#updateProfileForm");

 

  if (form) {
    const { name, email } = load("profile")
    form.name.value = name;
    form.email.value = email;

    const button = form.querySelector("button");
    button.disabled = true;

    const profile = await getProfile(name);

    
    form.banner.value = profile.banner;
    form.avatar.value = profile.avatar

    button.disabled = false;
    
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries())
      
      profile.name = name;
      profile.email = email;
      console.log('success');
        
      //calling the function to send to API
      updateProfile(profile)
    });
  }


}