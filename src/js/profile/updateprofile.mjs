import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";
const method = "put";
/**
 * This is run along side with the handler for updating a user profile, that is located in the handlers folder under file UpdateProfile.mjs.
 * @param {*} profileData 
 * @returns 
 */
export async function uppdateProfile(profileData) {
    if (!profileData.name) {
        throw new Error("Check your form");
    }
    const updateProfileURL = `${API_SOCIAL_URL}${action}/${profileData.name}/media`;
    
    const response = await authFetch(updateProfileURL, {
        method,
        body: JSON.stringify(profileData)
    })

    return await response.json();
}