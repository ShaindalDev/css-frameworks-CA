import { API_SOCIAL_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
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