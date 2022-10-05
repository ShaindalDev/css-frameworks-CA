import { API_SOCIAL_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";
// const deletePost = document.getElementById("deletePost");
// const token = localStorage.getItem("_token");

const action = "/posts";
const method = "delete";
export async function deletePost() {
    if (!id) {
      throw new Error("To delete a post it requires a Post ID!");
    }
      const deletePostUrl = `${API_SOCIAL_URL}${action}/${id}`;

      const response = await authFetch(deletePostUrl, {
        method,
      })
      return await response.json();
    }
    
