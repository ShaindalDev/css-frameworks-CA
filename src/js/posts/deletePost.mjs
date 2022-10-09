import { API_SOCIAL_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";
// const deletePost = document.getElementById("deletePost");
// const token = localStorage.getItem("_token");

const action = "/posts";
const method = "delete";
const removePost = document.getElementById("removePost");


/**
 * This is the delete post function that is run when a user want to delete a post they have created. This requires the POST ID to be run otherwise it will throw an error.
 * The post will be delete from the API DB. This is then called in the eventListener from handlers folder. 
 * @param {integer} id 
 * @returns 
 */
export async function deletePost(id) {
  if (!id) {
    throw new Error("To delete a post it requires a Post ID!");
  }
  const deletePostUrl = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(deletePostUrl, {
    method,
  });

  return await response.json();
}

// console.log("delete post module loaded");

