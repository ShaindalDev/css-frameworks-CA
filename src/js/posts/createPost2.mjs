import { API_SOCIAL_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

const action = "/posts";
const method = "post";

/**
 * This uses the POST method so that the post you create gets up on the API. This is the createPost function in it self, which then is called in the eventlistener from createPost.mjs in handlers folder.
 * @param {*} postData 
 */
export async function createPost(postData) {
    const createPostURL = API_SOCIAL_URL + action;

    const response = await authFetch(createPostURL, {
        method,
        body: JSON.stringify(postData)
    })

    const post = await response.json();

    console.log(post)
}