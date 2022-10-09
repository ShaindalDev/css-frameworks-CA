import { API_SOCIAL_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

const action = "/posts";
const method = "put";
/**
 * This is the function that is run when a user want to update a post they have created. And makes a PUT request to the API so that the updated data can be displayed for everyone.
 * @param {*} postData 
 * @returns 
 */
export async function updateUsersPost(postData) {
    if (!postData.id) {
        throw new Error("To update a post it requires a postID");
    }
    const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;
    
    const response = await authFetch(updatePostURL, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json();
}