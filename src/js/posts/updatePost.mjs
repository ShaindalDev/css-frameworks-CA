import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "put";

export async function uppdatePost(postData) {
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