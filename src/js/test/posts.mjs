import { API_SOCIAL_URL, token } from "../api/constants.mjs";
import { renderPosts } from "../components/renderPost.mjs";
import { searchPosts } from "../components/searchFunction.mjs";
import { authFetch } from "../api/authFetch.mjs";
// import { filterPosts } from "../components/filterFunction.mjs";

const fBtn = document.querySelectorAll('.fBtn');
const filteredPostContainer = document.querySelector('#filteredPostContainer');
let posts = [];

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
  const response = await authFetch(
    `${API_SOCIAL_URL}/posts/?sort=created&sortOrder=desc&_author=true&_reactions=true&_comments=true`,
    
  );

  posts = await response.json();
  // console.log(posts);

  renderPosts(posts);
  searchPosts(posts);

  const postContainer = document.getElementById("postContainer");

  postContainer.innerHTML = "";

  posts.forEach(function (post) {
    postContainer.innerHTML += `
    
      <div class="col-md-6">

        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow p-2 h-md-250 position-relative">

          <div class="d-flex justify-content-between">

            <a href="../pages/post.html?id=${post.id}" class="btn btn-primary">View Post</a>

          </div>

          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">${post.author.name}</strong>
            <h3 class="mb-0">${post.title}</h3>
            <div class="mb-1 text-dark">Created:${post.created}</div>
            <p class="card-text mb-auto">${post.body}</p>
            <div class="media">
              <img class="mb-3 mw-100" role="img" src="${post.media}">
            </div>
            <div class="mb-1 text-dark">Tags: ${post.tags}</div>
          </div>

          <ul class="nav nav-stack py-3 small">
            <li class="nav-item">
              <a class="nav-link active" href="#">Likes: ${post._count.reactions} <i class="fa-solid fa-heart"></i> </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Comments ${post._count.comments}</a>
            </li>
          </ul>
          <div class="d-flex mb-3">
            <div class="post post-xs me-2">
              <a href="#"> <img class="post-img rounded-circle" src="${post.owner}" alt=""> </a>
            </div>
            <form class="w-100">
              <textarea class="form-control pe-4 bg-dim" rows="1" placeholder="Add a comment...">${post.comments}</textarea>
            </form>
          </div>

          <ul class="comment-wrap list-unstyled">
            <li class="comment-item">
              <div class="d-flex position-relative">
                <div class="post post-xs">
                  <a href="#">
                    <img class="post-img rounded-circle" src="#" alt="">
                  </a>
                </div>
                <div class="ms-2">
                  <div class="bg-dark p-3 rounded">
                    <div class="d-flex justify-content-between">
                      <h6 class="mb-1"> <a href="#"> </a></h6>
                      <small class="ms-2">10hr</small>
                    </div>
                    <p class="small mb-0"></p>
                  </div>
                  <ul class="nav py-2 small">
                    <li class="nav-item">
                      <a class="nav-link" href="#"> Like (6)</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"> Reply</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"> View 12 replies</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>

          <div class="d-flex justify-content-center">
            <a href="#" role="button" class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5" data-bs-toggle="button" aria-pressed="true">
              <div class="dotsdots me-2">
                <span class="dotDot"></span>
                <span class="dotDot"></span>
                <span class="dotDot"></span>
              </div>
              Load more replies
            </a>
          </div>

        </div>

      </div>
    `;

  });
  
  if (!response.ok) {
    throw new Error("HTTP error! status: ${response.status}");
  }
}


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