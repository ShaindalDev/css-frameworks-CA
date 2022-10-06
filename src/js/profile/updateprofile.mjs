import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";
const method = "put";

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