import { API_SOCIAL_URL, token } from "../api/constants.mjs";
import { renderPosts } from "../components/renderPost.mjs";
import { searchPosts } from "../components/searchFunction.mjs";
import { authFetch } from "../api/authFetch.mjs";
// import { filterPosts } from "../components/filterFunction.mjs";

const fBtn = document.querySelectorAll('.fBtn');
// const filteredPostContainer = document.querySelector('#filteredPostContainer');

/**
 * This is the event listener for the search bar, this will is what registers the keypress and filters trough posts to find the match characters used in the searchbar
 */

// const authOptions = {
//   headers: {
//     "Content-type": `application/json; charset=UTF-8`,
//     Authorization: `Bearer ${token}`,
//   },
// };

//Get all posts on the API
export async function getAllPosts() {

  const url = `${API_SOCIAL_URL}/posts/?sort=created&sortOrder=desc&_author=true&_reactions=true&_comments=true`;
  const method = "GET";

  try {
    const response = await authFetch(url, method);
    const posts = await response.json();

    renderPosts(posts);
    searchPosts(posts);
  } catch(error) {
    console.log(error);
  }
};

getAllPosts();

// #####TESTING SECTION nothing here is important so it will be commented out when not in use######

// const displaySearchedPosts = (posts) => {
//   const htmlString = posts.map((post) => {
//     return `<div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow p-2 h-md-250 position-relative">

//     <div class="d-flex justify-content-between">

//       <a href="../pages/post.html?id=${post.id}" class="btn btn-primary">View Post</a>

//     </div>

//     <div class="col p-4 d-flex flex-column position-static">
//       <strong class="d-inline-block mb-2 text-primary">${post.author.name}</strong>
//       <h3 class="mb-0">${post.title}</h3>
//       <div class="mb-1 text-dark">Created: ${post.created}</div>
//       <p class="card-text mb-auto">${post.body}</p>
//       <div class="media">
//         <img class="mb-3 mw-100" role="img" src="${post.media}">
//       </div>
//       <div class="mb-1 text-dark">Tags: ${post.tags} </div>
//     </div>

//     <ul class="nav nav-stack py-3 small">
//       <li class="nav-item">
//         <a class="nav-link active" href="#">Likes: ${post._count.reactions} <i class="fa-solid fa-heart"></i> </a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Comments ${post._count.comments}</a>
//       </li>
//     </ul>
//     <div class="d-flex mb-3">
//       <div class="post post-xs me-2">
//         <a href="#"> <img class="post-img rounded-circle" src="${post.owner}" alt=""> </a>
//       </div>
//   </div>`;
//   })
//   .join('');
//   searchResult.innerHTML = htmlString;
// };