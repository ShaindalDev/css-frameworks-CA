import { authFetch } from "../api/authFetch.mjs";
import { API_SOCIAL_URL } from "../api/constants.mjs";
import { renderPosts } from "../components/renderPost.mjs";
console.log("filter was loaded");
/**
 * Function with filter feed listener. Calling this one in index.mjs in the main JS folder
 */

export async function filterFeedAscending() {
  const container = document.querySelector("#postContainer");
  const filterOldest = document.getElementById("newest");

  const oldestPostsUrl = API_SOCIAL_URL + "/posts?_author=true&sort=updated&sortOrder=asc";
  const response = await authFetch(oldestPostsUrl);
  const post = await response.json();

  filterOldest.addEventListener("click", () => {
    console.log("this was clicked");
    container.innerHTML = "";
    renderPosts(post, container);
  });
}

/**
 * Function with filter feed listener. Calling this one in index.mjs in the main JS folder
 */

export async function filterFeedDescending() {
  const container = document.querySelector("#postContainer");
  const filterOldest = document.querySelector("#oldest");

  const newestPostsUrl = API_SOCIAL_URL + "/posts?_author=true&sort=updated&sortOrder=desc";
  const response = await authFetch(newestPostsUrl);
  const post = await response.json();

  filterOldest.addEventListener("click", () => {
    console.log("this was clicked");
    container.innerHTML = "";
    renderPosts(post, container);
  });

  
}